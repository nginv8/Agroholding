import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';

const products = [
  {
    id: 1,
    name: 'Преміум попкорн',
    description:
      'Найкраща кукурудза для попкорну преміум якості з відмінними смаковими характеристиками',
    image: '/demo/p1.jpg',
  },
  {
    id: 2,
    name: 'Золота кукурудза',
    description: 'Спеціальний сорт кукурудзи для професійного використання з високою врожайністю',
    image: '/demo/p2.jpg',
  },
  {
    id: 3,
    name: 'Органік попкорн',
    description: 'Органічна кукурудза для попкорну, вирощена без використання хімікатів',
    image: '/demo/p3.jpg',
  },
  {
    id: 4,
    name: 'Солодка кукурудза',
    description: 'Спеціальний сорт солодкої кукурудзи для свіжого споживання та консервування',
    image: '/demo/p4.jpg',
  },
  {
    id: 5,
    name: 'Кормова кукурудза',
    description: 'Високоврожайний сорт кукурудзи для виробництва кормів',
    image: '/demo/p5.jpg',
  },
  {
    id: 6,
    name: 'Насіннєва кукурудза',
    description: 'Елітне насіння кукурудзи для професійного вирощування',
    image: '/demo/p6.jpg',
  },
  {
    id: 7,
    name: 'Біла кукурудза',
    description: 'Спеціальний сорт білої кукурудзи для виробництва крупи та борошна',
    image: '/demo/p7.jpg',
  },
  {
    id: 8,
    name: 'Цукрова кукурудза',
    description: 'Надсолодкий сорт кукурудзи з підвищеним вмістом цукру',
    image: '/demo/p8.jpg',
  },
];

export default function ProductGrid() {
  return (
    <section className="overflow-hidden bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <Title
          title="Широкий асортимент {{якісної продукції}}"
          subtitle="Ми пропонуємо різноманітні сорти кукурудзи та інших культур, які відповідають найвищим стандартам якості"
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="#" className="group block">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                  {product.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-gray-600">{product.description}</p>
                <span className="inline-flex items-center font-medium text-green-700 group-hover:text-green-600">
                  Детальніше
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="outline" className="group">
            Показати більше
            <ArrowDown className="ml-2 size-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
