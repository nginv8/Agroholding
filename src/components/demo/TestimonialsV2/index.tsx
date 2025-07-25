'use client';

import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import * as motion from 'motion/react-client';

const testimonials = [
  {
    id: 1,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/demo/a4.jpg',
    image: '/demo/r1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Марія Ковальчук',
    role: 'Директор з виробництва',
    content:
      'Професійний підхід до роботи та висока якість продукції. Рекомендую як надійного партнера.',
    avatar: '/demo/a3.jpg',
    image: '/demo/r2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Олександр Мельник',
    role: 'Керівник агрохолдингу',
    content:
      'Інноваційний підхід до вирощування та обробки продукції. Завжди дотримуються термінів та умов співпраці.',
    avatar: '/demo/a2.jpg',
    image: '/demo/r4.jpg',
    rating: 5,
  },
];

export default function TestimonialsV2() {
  return (
    <section className="overflow-hidden bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
            Відгуки клієнтів
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Що про нас кажуть
            <span className="block text-green-700">наші партнери</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Довіра та задоволення наших клієнтів — головний показник якості нашої роботи
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={testimonial.image || '/placeholder.svg'}
                    alt={`${testimonial.name} проект`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="relative p-8">
                  {/* Цитата */}
                  <div className="absolute -top-8 right-8 flex size-16 items-center justify-center rounded-full bg-yellow-500 shadow-lg">
                    <Quote className="size-8 text-white" />
                  </div>

                  <div className="mb-6 flex items-center">
                    <Image
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="aspect-square rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-current text-yellow-500" />
                    ))}
                  </div>

                  <p className="leading-relaxed text-gray-600">{testimonial.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
