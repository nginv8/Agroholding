'use client';

import Image from 'next/image';
import { Award, Leaf, TrendingUp, Users } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Title } from '@/components/ui/title';

const features = [
  {
    icon: Leaf,
    title: 'Екологічність',
    description: 'Ми використовуємо екологічно чисті методи вирощування наших культур',
  },
  {
    icon: Award,
    title: 'Якість',
    description: 'Суворий контроль якості на всіх етапах виробництва',
  },
  {
    icon: Users,
    title: 'Досвід',
    description: 'Багаторічний досвід у сільському господарстві',
  },
  {
    icon: TrendingUp,
    title: 'Інновації',
    description: 'Впровадження сучасних технологій землеробства',
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-green-900/90 py-20 text-white">
      <Image
        src="/demo/k5.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-40 -z-10"
      />
      <div className="container mx-auto px-4">
        <Title
          title="Досконалість у {{кожній деталі}}"
          subtitle="Ми прагнемо до досконалості у всьому, що робимо, забезпечуючи найвищу якість продукції та сервісу для наших клієнтів"
          align="center"
          style="light"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-full rounded-lg bg-green-800 p-6"
              >
                <div className="mb-4 inline-block rounded-full bg-green-700 p-3">
                  <feature.icon className="size-6 text-yellow-500" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
