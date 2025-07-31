import { getPayload } from 'payload';

import { NextRequest, NextResponse } from 'next/server';
import configPromise from '@payload-config';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json({ message: "Email адреса обов'язкова" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Некоректна email адреса' }, { status: 400 });
    }

    const payload = await getPayload({ config: configPromise });

    // Check if email already exists
    const existingSubscriber = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    });

    if (existingSubscriber.docs.length > 0) {
      const subscriber = existingSubscriber.docs[0];
      if (subscriber.status === 'active') {
        return NextResponse.json(
          { message: 'Ви вже підписані на нашу розсилку!' },
          { status: 400 }
        );
      } else {
        // Reactivate subscription
        await payload.update({
          collection: 'subscribers',
          id: subscriber.id,
          data: {
            status: 'active',
            subscribedAt: new Date().toISOString(),
          },
        });
        return NextResponse.json({
          message: 'Вашу підписку успішно відновлено!',
          email,
        });
      }
    }

    // Create new subscriber
    await payload.create({
      collection: 'subscribers',
      data: {
        email,
        status: 'active',
        source: 'footer',
      },
    });

    // Optional: Integrate with external newsletter service
    // await addToMailchimp(email);
    // await sendWelcomeEmail(email);

    return NextResponse.json(
      {
        message: 'Успішно підписано на розсилку!',
        email,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Newsletter subscription error:', error);

    // Handle specific Payload errors
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError') {
      return NextResponse.json({ message: 'Помилка валідації даних' }, { status: 400 });
    }

    // Handle duplicate key error (PostgreSQL)
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json({ message: 'Email вже існує в базі даних' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Внутрішня помилка сервера' }, { status: 500 });
  }
}
