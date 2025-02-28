import * as motion from 'motion/react-client'
import { Leaf, Award, Users, TrendingUp, Shield, Sprout } from 'lucide-react'
import { Title } from '../ui/title'

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
]

export default function Advantages() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <Title
          title="Чому обирають нас"
          boldPart="нас"
          subtitle="Ми поєднуємо традиції та інновації для досягнення найкращих результатів у сільському господарстві"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
              className="flex items-start group cursor-pointer"
            >
              <div className="mr-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out]">
                    <advantage.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                {/* Декоративний елемент */}
                <div className="absolute -z-10 -inset-4 rounded-[30px] bg-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
