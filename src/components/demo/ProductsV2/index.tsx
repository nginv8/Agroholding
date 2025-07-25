import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Преміум попкорн',
    description:
      'Найкраща кукурудза для попкорну преміум якості з відмінними смаковими характеристиками',
    image: '/demo/p3.jpg',
    rating: 5,
    features: ['Великі зерна', 'Відмінний смак', '100% натуральний продукт'],
  },
  {
    id: 2,
    name: 'Золота кукурудза',
    description: 'Спеціальний сорт кукурудзи для професійного використання',
    image: '/demo/p2.jpg',
    rating: 5,
    features: ['Висока врожайність', 'Стійкість до хвороб', 'Тривале зберігання'],
  },
  {
    id: 3,
    name: 'Органік попкорн',
    description: 'Органічна кукурудза для попкорну, вирощена без використання хімікатів',
    image: '/demo/p7.jpg',
    rating: 5,
    features: ['Органічний продукт', 'Екологічно чистий', 'Багатий смак'],
  },
];

export default function ProductsV2() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100/80" />
      <div className="absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-gradient-to-b from-gray-100/80 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
            Наша продукція
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Преміальна якість для
            <span className="block text-green-700">вашого бізнесу</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Ми пропонуємо широкий асортимент високоякісної продукції, яка відповідає найвищим
            міжнародним стандартам
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="flex h-full flex-col justify-stretch overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Оверлей з градієнтом */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{product.name}</h3>

                  <p className="mb-6 text-gray-600">{product.description}</p>

                  <div className="mb-8 space-y-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="size-1.5 rounded-full bg-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="group/btn w-full">
                    Дізнатися більше
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 rounded-2xl border border-slate-300 bg-orange-50 p-12"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Шукаєте індивідуальне рішення?
              </h3>
              <p className="mb-6 text-gray-600">
                Ми можемо розробити спеціальну пропозицію під ваші потреби та масштаби бізнесу.
              </p>
              <Button variant="outline" size="lg" className="group">
                Зв&apos;язатися з нами
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-64">
              <Image
                src="/demo/rc1.jpg"
                alt="Консультація"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
