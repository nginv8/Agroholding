'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { Lightbulb, Sprout, Recycle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

const ideas = [
  {
    icon: Lightbulb,
    title: 'Інновації в агротехнологіях',
    description:
      'Впровадження сучасних методів обробки землі та вирощування культур для досягнення найкращих результатів',
    image: '/agro-media/1.jpg',
  },
  {
    icon: Sprout,
    title: 'Екологічне землеробство',
    description:
      'Розвиток органічного землеробства та збереження природних ресурсів для майбутніх поколінь',
    image: '/agro-media/2.jpg',
  },
  {
    icon: Recycle,
    title: 'Сталий розвиток',
    description:
      'Збалансований підхід до використання природних ресурсів та впровадження відновлюваних джерел енергії',
    image: '/agro-media/3.jpg',
  },
]

export default function OurIdeasV2() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
            Наші ідеї
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Інновації та розвиток
            <span className="block text-green-700">для майбутнього</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ми постійно розвиваємося та впроваджуємо інноваційні рішення для покращення якості нашої
            продукції та збереження довкілля
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={idea.image || '/placeholder.svg'}
                    alt={idea.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Іконка на зображенні */}
                  <div className="absolute bottom-6 left-6 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <idea.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{idea.title}</h3>
                  <p className="text-gray-600 mb-6">{idea.description}</p>
                  <Button variant="outline" className="w-full group/btn">
                    Дізнатися більше
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Додаткова секція */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/agro-media/2.jpg"
                alt="Інновації в дії"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              {/* Декоративні елементи */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Приєднуйтесь до інновацій</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ми запрошуємо до співпраці компанії, які поділяють наші цінності та прагнуть
                розвивати агробізнес майбутнього разом з нами.
              </p>
              <Button size="lg" className="group">
                Стати партнером
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
