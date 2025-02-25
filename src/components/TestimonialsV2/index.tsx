'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Іван Петренко',
    role: 'Власник мережі кінотеатрів',
    content:
      'Найкраща кукурудза для попкорну, яку ми коли-небудь використовували. Відмінна якість та стабільні поставки.',
    avatar: '/agro-media/1.jpg',
    image: '/agro-media/2.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Марія Ковальчук',
    role: 'Директор з виробництва',
    content:
      'Професійний підхід до роботи та висока якість продукції. Рекомендую як надійного партнера.',
    avatar: '/agro-media/2.jpg',
    image: '/agro-media/3.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Олександр Мельник',
    role: 'Керівник агрохолдингу',
    content:
      'Інноваційний підхід до вирощування та обробки продукції. Завжди дотримуються термінів та умов співпраці.',
    avatar: '/agro-media/3.jpg',
    image: '/agro-media/1.jpg',
    rating: 5,
  },
]

export default function TestimonialsV2() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
            Відгуки клієнтів
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Що про нас кажуть
            <span className="block text-green-700">наші партнери</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Довіра та задоволення наших клієнтів — головний показник якості нашої роботи
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={testimonial.image || '/placeholder.svg'}
                    alt={`${testimonial.name} проект`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-8 relative">
                  {/* Цитата */}
                  <div className="absolute -top-8 right-8 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
