'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Building2,
  Calculator,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  MonitorSmartphone,
  Users,
  Wrench,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button';

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
];

export default function CareersV2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    resetSliderInterval();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const resetSliderInterval = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % positions.length);
    }, slideInterval);
  };

  const paginate = (newDirection: number) => {
    resetSliderInterval();
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % positions.length;
      }
      return prev === 0 ? positions.length - 1 : prev - 1;
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-32">
      <div className="container grid grid-cols-1 items-center gap-x-16 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto mb-10 max-w-3xl text-center lg:mb-24 lg:text-left"
        >
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
            Кар&apos;єра в AgroHolding
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Приєднуйтесь до команди
            <span className="block text-green-700">професіоналів</span>
          </h2>
          <Image
            src="/demo/team3.jpg"
            alt="Наша команда"
            width={500}
            height={300}
            className="mb-6 h-64 w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <p className="text-xl leading-relaxed text-gray-600">
            Ми шукаємо талановитих спеціалістів, які прагнуть розвиватися та робити внесок у
            розвиток сільського господарства України
          </p>

          <Button size="lg" variant="outline" className="group mt-8 hidden lg:flex">
            Всі вакансії
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="relative col-span-1 mx-auto flex h-[580px] w-full items-center justify-center">
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
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="rounded-2xl bg-white p-12 shadow-xl">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-3xl font-bold text-gray-900">
                    {positions[currentSlide] && positions[currentSlide].title}
                  </h3>
                  <p className="font-medium text-green-600">
                    {positions[currentSlide] && positions[currentSlide].location}
                  </p>
                </div>

                <div className="mb-8 space-y-6">
                  {positions[currentSlide] &&
                    positions[currentSlide].requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
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
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Кнопки навігації */}
          <button
            className="absolute left-0 top-1/2 z-10 flex size-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 lg:-translate-x-12"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="size-6 text-gray-600" />
          </button>
          <button
            className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 lg:translate-x-12"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="size-6 text-gray-600" />
          </button>

          {/* Індикатори */}
          <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
            {positions.map((_, index) => (
              <button
                key={index}
                className={`size-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-4 bg-green-600' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
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
          className="mt-16 text-center lg:hidden"
        >
          <Button size="lg" variant="outline" className="group">
            Всі вакансії
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
