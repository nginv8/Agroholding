import Image from 'next/image';
import { ArrowRight, Lightbulb, Recycle, Sprout } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

const ideas = [
  {
    icon: Lightbulb,
    title: 'Інновації в агротехнологіях',
    description:
      'Впровадження сучасних методів обробки землі та вирощування культур для досягнення найкращих результатів',
    image: '/demo/w5.jpg',
  },
  {
    icon: Sprout,
    title: 'Екологічне землеробство',
    description:
      'Розвиток органічного землеробства та збереження природних ресурсів для майбутніх поколінь',
    image: '/demo/w1.jpg',
  },
  {
    icon: Recycle,
    title: 'Сталий розвиток',
    description:
      'Збалансований підхід до використання природних ресурсів та впровадження відновлюваних джерел енергії',
    image: '/demo/hub.jpg',
  },
];

export default function OurIdeasV2() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
            Наші ідеї
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Інновації та розвиток
            <span className="block text-green-700">для майбутнього</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Ми постійно розвиваємося та впроваджуємо інноваційні рішення для покращення якості нашої
            продукції та збереження довкілля
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={idea.image || '/placeholder.svg'}
                    alt={idea.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Іконка на зображенні */}
                  <div className="absolute bottom-6 left-6 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <idea.icon className="size-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{idea.title}</h3>
                  <p className="mb-6 text-gray-600">{idea.description}</p>
                  <Button variant="outline" className="group/btn w-full">
                    Дізнатися більше
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
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
          className="relative mt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="/demo/w4.jpg"
                alt="Інновації в дії"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              {/* Декоративні елементи */}
              <div className="absolute -bottom-8 -right-8 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">Приєднуйтесь до інновацій</h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Ми запрошуємо до співпраці компанії, які поділяють наші цінності та прагнуть
                розвивати агробізнес майбутнього разом з нами.
              </p>
              <Button size="lg" className="group">
                Стати партнером
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
