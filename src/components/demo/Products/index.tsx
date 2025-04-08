'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

const products = [
  {
    id: 1,
    name: 'Преміум попкорн',
    description: 'Найкраща кукурудза для попкорну преміум якості',
    image: '/agro-media/1.jpg',
  },
  {
    id: 2,
    name: 'Преміум попкорн',
    description: 'Найкраща кукурудза для попкорну преміум якості',
    image: '/agro-media/2.jpg',
  },
  {
    id: 3,
    name: 'Преміум попкорн',
    description: 'Найкраща кукурудза для попкорну преміум якості',
    image: '/agro-media/3.jpg',
  },
  // Add more products...
]

export default function Products() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Title
          title="Преміальна якість для вашого бізнесу"
          boldPart="вашого бізнесу"
          subtitle="Ми пропонуємо широкий асортимент сільськогосподарської продукції найвищої якості"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg p-6"
              >
                <div className="relative h-64 mb-6">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button className="w-full">Дізнатись більше</Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
