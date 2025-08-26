import { Award, Leaf, Shield, Sprout, TrendingUp, Users } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Title } from '@/components/ui/title';

const advantages = [
  {
    icon: Leaf,
    title: 'Екологічність',
    description:
      'Використовуємо екологічно чисті методи вирощування наших культур, зберігаючи природні ресурси',
  },
  {
    icon: Award,
    title: 'Найвища якість',
    description:
      'Суворий контроль якості на всіх етапах виробництва забезпечує преміальну якість продукції',
  },
  {
    icon: Shield,
    title: 'Сертифікація',
    description: 'Вся продукція сертифікована згідно з міжнародними стандартами якості та безпеки',
  },
  {
    icon: Users,
    title: 'Досвідчена команда',
    description:
      'Наша команда складається з професіоналів з багаторічним досвідом у сільському господарстві',
  },
  {
    icon: TrendingUp,
    title: 'Інноваційність',
    description: 'Впровадження сучасних технологій та методів для досягнення найкращих результатів',
  },
  {
    icon: Sprout,
    title: 'Сталий розвиток',
    description: 'Збалансований підхід до використання ресурсів та турбота про майбутні покоління',
  },
];

export default function Advantages() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="container mx-auto px-4">
        <Title
          title="Чому обирають {{нас}}"
          subtitle="Ми поєднуємо традиції та інновації для досягнення найкращих результатів у сільському господарстві"
          align="center"
        />

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group flex cursor-pointer items-start"
            >
              <div className="relative mr-6">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-green-50 transition-colors group-hover:bg-green-100">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out]">
                    <advantage.icon className="size-8 text-green-600" />
                  </div>
                </div>
                {/* Декоративний елемент */}
                <div className="absolute -inset-4 -z-10 rounded-[30px] bg-green-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                  {advantage.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
