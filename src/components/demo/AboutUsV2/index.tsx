'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import { Button } from '@/components/ui/button';

export default function AboutUsV2() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-gradient-to-b from-white to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Ліва колонка з зображеннями */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/demo/field3.jpg"
                alt="Поле пшениці"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Плаваюче зображення */}
            <div className="absolute -bottom-12 -right-12 z-20 size-1/2">
              <motion.div style={{ y: y1 }}>
                <Image
                  src="/demo/g6.jpg"
                  alt="Кукурудза крупним планом"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>

            {/* Декоративні елементи */}
            <div className="absolute -left-12 -top-12 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 size-64 rounded-full bg-green-500/10 blur-3xl" />
          </motion.div>

          {/* Права колонка з текстом */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
              Про нашу компанію
            </span>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Лідери у вирощуванні
              <span className="block text-green-700">преміальної кукурудзи</span>
            </h2>

            <p className="mb-12 text-xl leading-relaxed text-gray-600">
              Наша компанія поєднує багаторічний досвід українського землеробства з найсучаснішими
              технологіями для створення продукції найвищої якості.
            </p>

            <div className="mb-12 grid gap-8 sm:grid-cols-2">
              {[
                {
                  title: 'Інноваційні технології',
                  description: 'Використання передових агротехнологій та методів обробки землі',
                },
                {
                  title: 'Контроль якості',
                  description: 'Власна сертифікована лабораторія та постійний моніторинг',
                },
                {
                  title: 'Екологічність',
                  description: 'Збереження природних ресурсів та екологічний підхід',
                },
                {
                  title: 'Світові стандарти',
                  description: 'Відповідність міжнародним стандартам якості',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                        <Check className="size-4 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group">
              Дізнатися більше
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Статистика */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '15+', label: 'років досвіду' },
            { number: '1000+', label: 'гектарів землі' },
            { number: '50+', label: 'партнерів' },
            { number: '10+', label: 'країн експорту' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl" />
              <div className="relative p-8 text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
