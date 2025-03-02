import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Основний контент */}
      <div className="min-h-screen flex flex-col justify-center">
        <div className="relative z-20 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center flex-1  py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-yellow-400 text-sm tracking-wider uppercase mb-6 font-medium">
                Традиції та інновації
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Вирощуємо
              <span className="block">майбутнє України</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl text-gray-200 mb-12 leading-relaxed"
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
                className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-8 h-14 w-full md:w-auto"
              >
                Дізнатися більше
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 h-14 bg-transparent border-white hover:bg-white hover:text-black transition-colors w-full md:w-auto"
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
                className="rounded-2xl "
              />
              {/* Декоративні елементи */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
        <div className="relative w-full top-full left-0 right-0 z-20 bg-black/30 backdrop-blur-sm flex-none">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
