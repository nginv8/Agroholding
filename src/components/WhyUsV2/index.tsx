import * as motion from 'motion/react-client'
import { Leaf, Award, Users, TrendingUp, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Leaf,
    title: 'Екологічність',
    description:
      'Використовуємо екологічно чисті методи вирощування наших культур, зберігаючи природні ресурси для майбутніх поколінь',
    image: '/demo/o1.jpg',
  },
  {
    icon: Award,
    title: 'Найвища якість',
    description:
      'Суворий контроль якості на всіх етапах виробництва забезпечує преміальну якість нашої продукції',
    image: '/demo/p4.jpg',
  },
  {
    icon: Users,
    title: 'Професійна команда',
    description:
      'Наша команда складається з досвідчених фахівців з багаторічним досвідом у сільському господарстві',
    image: '/demo/team3.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Інноваційний підхід',
    description:
      'Впровадження сучасних технологій землеробства для досягнення найкращих результатів',
    image: '/demo/l3.jpg',
  },
]

export default function WhyUsV2() {
  return (
    <section className="relative py-32 bg-green-950 overflow-hidden">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0">
        <Image
          src="/demo/field2.jpg"
          alt="Background texture"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 to-green-950" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-yellow-400 text-sm tracking-wider uppercase mb-6 font-medium">
            Чому обирають нас
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Досконалість у кожній деталі
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ми прагнемо до досконалості у всьому, що робимо, забезпечуючи найвищу якість продукції
            та сервісу для наших клієнтів
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="relative h-[300px] mb-8 overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent" />

                  {/* Іконка на зображенні */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group/btn">
                    Дізнатися більше
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 p-8 rounded-2xl bg-white/5 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '97%',
                label: 'Задоволених клієнтів',
                description: 'За результатами щорічного опитування',
              },
              {
                number: 'ISO 9001',
                label: 'Сертифікація',
                description: 'Міжнародний стандарт якості',
              },
              {
                number: '24/7',
                label: 'Підтримка',
                description: 'Професійний супровід клієнтів',
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
