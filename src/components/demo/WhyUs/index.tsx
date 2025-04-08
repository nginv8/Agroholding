'use client'

import Image from 'next/image'
import * as motion from 'motion/react-client'
import { Leaf, Award, Users, TrendingUp } from 'lucide-react'
import { Title } from '@/components/ui/title'

const features = [
  {
    icon: Leaf,
    title: 'Екологічність',
    description: 'Ми використовуємо екологічно чисті методи вирощування наших культур',
  },
  {
    icon: Award,
    title: 'Якість',
    description: 'Суворий контроль якості на всіх етапах виробництва',
  },
  {
    icon: Users,
    title: 'Досвід',
    description: 'Багаторічний досвід у сільському господарстві',
  },
  {
    icon: TrendingUp,
    title: 'Інновації',
    description: 'Впровадження сучасних технологій землеробства',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 bg-green-900/90 text-white overflow-hidden">
      <Image
        src="/demo/k5.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-40 -z-10"
      />
      <div className="container mx-auto px-4">
        <Title
          title="Досконалість у кожній деталі"
          boldPart="кожній деталі"
          subtitle="Ми прагнемо до досконалості у всьому, що робимо, забезпечуючи найвищу якість продукції та сервісу для наших клієнтів"
          align="center"
          style="light"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-green-800 p-6 rounded-lg h-full"
              >
                <div className="inline-block p-3 bg-green-700 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
