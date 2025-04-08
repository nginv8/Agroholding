'use client'

import * as motion from 'motion/react-client'
import { Lightbulb, Sprout, Recycle } from 'lucide-react'

const ideas = [
  {
    icon: Lightbulb,
    title: 'Інновації в агротехнологіях',
    description:
      'Впровадження сучасних методів обробки землі та вирощування культур',
  },
  {
    icon: Sprout,
    title: 'Екологічне землеробство',
    description:
      'Розвиток органічного землеробства та збереження природних ресурсів',
  },
  {
    icon: Recycle,
    title: 'Сталий розвиток',
    description: 'Збалансований підхід до використання природних ресурсів',
  },
]

export default function OurIdeas() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Наші ідеї</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ми постійно розвиваємося та впроваджуємо нові ідеї для покращення
            якості нашої продукції
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-8 shadow-lg h-full"
              >
                <div className="mb-6">
                  <idea.icon className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  {idea.title}
                </h3>
                <p className="text-gray-600">{idea.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
