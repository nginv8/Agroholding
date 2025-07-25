'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';

export default function AboutSectionStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-32">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Текстова колонка */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <Title
                title="Лідери у вирощуванні преміальної кукурудзи"
                boldPart="преміальної кукурудзи"
                align="left"
              />
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl leading-relaxed text-gray-600"
                >
                  Сьогодні ми — це команда професіоналів, об&apos;єднаних спільною метою: вирощувати
                  найякіснішу продукцію, впроваджувати інноваційні технології та дбати про
                  українську землю. Наші поля — це не просто гектари землі, це наша гордість та
                  відповідальність перед майбутніми поколіннями.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-xl leading-relaxed text-gray-600"
                >
                  Ми віримо, що успіх починається з поваги до традицій та відкритості до інновацій.
                  Кожен день ми працюємо над тим, щоб створювати продукцію, якою пишається вся
                  країна.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button size="lg" className="group mt-8 bg-green-800">
                    Дізнатися більше
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Колонка з зображеннями */}
            <div className="relative h-[500px]">
              {/* Головне зображення */}
              <motion.div style={{ y: y1 }} className="absolute inset-x-0 top-20 z-20">
                <div className="relative h-[400px] w-11/12 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/demo/fd1.jpg" alt="Наші поля" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              {/* Додаткове зображення */}
              <motion.div
                style={{ y: y2, opacity }}
                className="absolute left-1/4 right-0 top-1/3 z-10"
              >
                <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl">
                  <Image src="/demo/field4.jpg" alt="Наша команда" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              {/* Декоративні елементи */}
              <div className="absolute -right-12 -top-12 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 size-64 rounded-full bg-green-500/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
