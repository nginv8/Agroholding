import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-wrap items-end overflow-hidden">
      {/* Фонове зображення */}
      <div className="fixed inset-0 -z-10 after:absolute after:inset-0 after:bg-black/50">
        <Image
          src="/demo/field2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-40"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-28">
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              Лідер у вирощуванні попкорну в Україні
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Вирощуємо майбутнє
            <span className="block text-yellow-400">українського агробізнесу</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
          >
            Інноваційні підходи до вирощування, сучасні технології та турбота про довкілля — основа
            нашого успіху у створенні продукції найвищої якості
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group w-full min-w-[200px] bg-yellow-500 text-black hover:bg-yellow-400 md:w-auto"
            >
              Наша продукція
              <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group w-full min-w-[200px] border-white bg-black/30 text-white hover:bg-white hover:text-black md:w-auto"
            >
              Зв&apos;язатися з нами
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="my-16 flex w-full justify-center"
      >
        <div className="h-10 w-6 animate-bounce rounded-full border-2 border-white p-1">
          <div className="mx-auto size-1.5 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
