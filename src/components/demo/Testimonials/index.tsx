'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Title } from '@/components/ui/title';

const testimonials = [
  {
    id: 1,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/demo/a1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/demo/a2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/demo/a3.jpg',
    rating: 5,
  },

  // Add more testimonials...
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        <Title
          title="Що про нас кажуть {{наші партнери}}"
          subtitle="Довіра та задоволення наших клієнтів — головний показник якості нашої роботи"
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 flex items-center">
                  <Image
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-green-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
