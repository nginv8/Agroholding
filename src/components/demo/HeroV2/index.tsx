import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

export default function HeroV2() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Паралакс фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image src="/demo/field12.jpg" alt="Пшеничне поле" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Декоративні елементи */}
      <div className="absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Основний контент */}
      <div className="flex min-h-screen flex-col justify-center">
        <div className="container relative z-20 mx-auto grid flex-1 items-center gap-12 px-4 py-32 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-400">
                Традиції та інновації
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-8 text-5xl font-bold leading-tight lg:text-7xl"
            >
              Вирощуємо
              <span className="block">майбутнє України</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mb-12 text-xl leading-relaxed text-gray-200"
            >
              Поєднуючи багатовікові традиції українського землеробства з найсучаснішими
              агротехнологіями, ми створюємо продукцію найвищої якості для світового ринку.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="h-14 w-full bg-yellow-500 px-8 text-lg text-black hover:bg-yellow-400 md:w-auto"
              >
                Дізнатися більше
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full border-2 border-white bg-transparent px-8 text-lg transition-colors hover:bg-white hover:text-black md:w-auto"
              >
                Зв&apos;язатися з нами
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <Image
                src="/demo/b4.png"
                alt="Кукурудза"
                width={600}
                height={600}
                className="rounded-2xl"
              />
              {/* Декоративні елементи */}
              <div className="absolute -bottom-8 -left-8 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
              <div className="absolute -right-8 -top-8 size-64 rounded-full bg-green-500/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
        <div className="relative inset-x-0 top-full z-20 w-full flex-none bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: '15+', label: 'років досвіду' },
                { number: '1000+', label: 'гектарів землі' },
                { number: '50+', label: 'партнерів' },
                { number: '10+', label: 'країн експорту' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                  className="text-center text-white"
                >
                  <div className="mb-2 text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-sm uppercase tracking-wider text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
