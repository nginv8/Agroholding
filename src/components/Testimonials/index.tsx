'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/agro-media/1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/agro-media/2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/agro-media/3.jpg',
    rating: 5,
  },

  // Add more testimonials...
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Відгуки клієнтів</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
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
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
