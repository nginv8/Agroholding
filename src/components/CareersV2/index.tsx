'use client'

import React, { useRef } from 'react'

import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Clock,
  Car,
  Wrench,
  Building2,
  Calculator,
  MonitorSmartphone,
  Users,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const positions = [
  {
    title: 'Агроном',
    location: 'Київська область',
    requirements: [
      {
        text: 'Вища аграрна освіта',
        icon: GraduationCap,
      },
      {
        text: 'Досвід роботи від 2 років',
        icon: Clock,
      },
      {
        text: 'Навички роботи з GPS-системами',
        icon: Calculator,
      },
      {
        text: 'Готовність до польових виїздів',
        icon: Car,
      },
    ],
  },
  {
    title: 'Механізатор',
    location: 'Полтавська область',
    requirements: [
      {
        text: 'Досвід роботи від 3 років',
        icon: Clock,
      },
      {
        text: 'Права категорії B, C',
        icon: Car,
      },
      {
        text: 'Знання сільгосптехніки',
        icon: Wrench,
      },
      {
        text: 'Досвід ремонтних робіт',
        icon: Building2,
      },
    ],
  },
  {
    title: 'Завідувач складу',
    location: 'Черкаська область',
    requirements: [
      {
        text: 'Досвід роботи від 2 років',
        icon: Clock,
      },
      {
        text: 'Знання складського обліку',
        icon: Calculator,
      },
      {
        text: 'Впевнений користувач 1C',
        icon: MonitorSmartphone,
      },
      {
        text: 'Вміння керувати персоналом',
        icon: Users,
      },
    ],
  },
]

export default function CareersV2() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const slideInterval = 5000
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    resetSliderInterval()

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const resetSliderInterval = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % positions.length)
    }, slideInterval)
  }

  const paginate = (newDirection: number) => {
    resetSliderInterval()
    setDirection(newDirection)
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % positions.length
      }
      return prev === 0 ? positions.length - 1 : prev - 1
    })
  }

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container px-4 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
            Кар&apos;єра в AgroHolding
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Приєднуйтесь до команди
            <span className="block text-green-700">професіоналів</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ми шукаємо талановитих спеціалістів, які прагнуть розвиватися та робити внесок у
            розвиток сільського господарства України
          </p>

          <Button size="lg" variant="outline" className="group hidden lg:flex mt-8">
            Всі вакансії
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="relative col-span-1 mx-auto h-[580px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl p-12 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {positions[currentSlide] && positions[currentSlide].title}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {positions[currentSlide] && positions[currentSlide].location}
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {positions[currentSlide] &&
                    positions[currentSlide].requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                          {React.createElement(requirement.icon, {
                            className: 'w-5 h-5 text-green-600',
                          })}
                        </div>
                        <p className="text-gray-600">{requirement.text}</p>
                      </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                  <Button size="lg" className="group">
                    Дізнатись більше
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Кнопки навігації */}
          <button
            className="absolute left-0 z-10 top-1/2 -translate-y-1/2 lg:-translate-x-12 -translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="absolute right-0 z-10 top-1/2 -translate-y-1/2 lg:translate-x-12 translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Індикатори */}
          <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {positions.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-green-600 w-4' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1)
                  setCurrentSlide(index)
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA секція */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16 lg:hidden"
        >
          <Button size="lg" variant="outline" className="group">
            Всі вакансії
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
