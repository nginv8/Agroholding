import Image from 'next/image';
import { Award, ChevronRight, Leaf, TrendingUp, Users } from 'lucide-react';
import * as motion from 'motion/react-client';

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
];

export default function WhyUsV2() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-32">
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

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-400">
            Чому обирають нас
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Досконалість у кожній деталі
          </h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Ми прагнемо до досконалості у всьому, що робимо, забезпечуючи найвищу якість продукції
            та сервісу для наших клієнтів
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
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
                <div className="relative mb-8 h-[300px] overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent" />

                  {/* Іконка на зображенні */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                      <feature.icon className="size-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>

                <div className="relative">
                  <p className="mb-4 text-lg leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                  <button className="group/btn inline-flex items-center text-yellow-400 transition-colors hover:text-yellow-300">
                    Дізнатися більше
                    <ChevronRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
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
          className="mt-24 rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="grid gap-8 md:grid-cols-3">
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
                <div className="mb-2 text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="mb-2 font-medium text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
