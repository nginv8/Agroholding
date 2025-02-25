'use client'

import * as motion from 'motion/react-client'
import { Leaf, Award, Users, TrendingUp } from 'lucide-react'

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
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Чому обирають нас</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

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
