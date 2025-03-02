import Image from 'next/image'
import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full border border-white/30 backdrop-blur-sm">
              Лідер у вирощуванні попкорну в Україні
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Вирощуємо майбутнє
            <span className="block text-yellow-400">українського агробізнесу</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Інноваційні підходи до вирощування, сучасні технології та турбота про довкілля — основа
            нашого успіху у створенні продукції найвищої якості
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black min-w-[200px] w-full md:w-auto group"
            >
              Наша продукція
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white bg-black/30 text-white hover:bg-white w-full md:w-auto  hover:text-black group"
            >
              Зв'язатися з нами
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1 animate-bounce">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  )
}
