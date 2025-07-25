'use client';

import { Lightbulb, Recycle, Sprout } from 'lucide-react';
import * as motion from 'motion/react-client';

const ideas = [
  {
    icon: Lightbulb,
    title: 'Інновації в агротехнологіях',
    description: 'Впровадження сучасних методів обробки землі та вирощування культур',
  },
  {
    icon: Sprout,
    title: 'Екологічне землеробство',
    description: 'Розвиток органічного землеробства та збереження природних ресурсів',
  },
  {
    icon: Recycle,
    title: 'Сталий розвиток',
    description: 'Збалансований підхід до використання природних ресурсів',
  },
];

export default function OurIdeas() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-green-800">Наші ідеї</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-yellow-500"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Ми постійно розвиваємося та впроваджуємо нові ідеї для покращення якості нашої продукції
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
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
                className="h-full rounded-lg bg-white p-8 shadow-lg"
              >
                <div className="mb-6">
                  <idea.icon className="size-12 text-green-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-green-800">{idea.title}</h3>
                <p className="text-gray-600">{idea.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
