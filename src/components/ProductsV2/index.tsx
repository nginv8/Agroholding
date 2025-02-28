'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Преміум попкорн',
    description:
      'Найкраща кукурудза для попкорну преміум якості з відмінними смаковими характеристиками',
    image: '/agro-media/1.jpg',
    rating: 5,
    features: ['Великі зерна', 'Відмінний смак', '100% натуральний продукт'],
  },
  {
    id: 2,
    name: 'Золота кукурудза',
    description: 'Спеціальний сорт кукурудзи для професійного використання',
    image: '/agro-media/2.jpg',
    rating: 5,
    features: ['Висока врожайність', 'Стійкість до хвороб', 'Тривале зберігання'],
  },
  {
    id: 3,
    name: 'Органік попкорн',
    description: 'Органічна кукурудза для попкорну, вирощена без використання хімікатів',
    image: '/agro-media/3.jpg',
    rating: 5,
    features: ['Органічний продукт', 'Екологічно чистий', 'Багатий смак'],
  },
]

export default function ProductsV2() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-gray-100/80 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
            Наша продукція
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Преміальна якість для
            <span className="block text-green-700">вашого бізнесу</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ми пропонуємо широкий асортимент високоякісної продукції, яка відповідає найвищим
            міжнародним стандартам
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="bg-white flex flex-col justify-stretch h-full rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Оверлей з градієнтом */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full group/btn">
                    Дізнатися більше
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 bg-orange-50 rounded-2xl p-12 border border-slate-300"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Шукаєте індивідуальне рішення?
              </h3>
              <p className="text-gray-600 mb-6">
                Ми можемо розробити спеціальну пропозицію під ваші потреби та масштаби бізнесу.
              </p>
              <Button variant="outline" size="lg" className="group">
                Зв'язатися з нами
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-64">
              <Image
                src="/agro-media/3.jpg"
                alt="Консультація"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
