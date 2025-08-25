import { getPayload } from 'payload';

import { NextRequest, NextResponse } from 'next/server';
import configPromise from '@payload-config';

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();

    const { name, email, phone, message, itemCode, productId, productTitle } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const orderSubmission = await payload.create({
      collection: 'order-submissions',
      data: {
        name,
        email,
        phone: phone || null,
        message: message || null,
        itemCode,
        productId: productId || null,
        productTitle: productTitle || null,
        submittedAt: new Date().toISOString(),
      },
    });

    // Here you could also send an email notification
    // await sendNotificationEmail({ email, phone, message, article, productTitle });

    return NextResponse.json({ success: true, id: orderSubmission.id });
  } catch (error) {
    console.error('Order form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
