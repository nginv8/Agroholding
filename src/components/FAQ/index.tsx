'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Які сорти кукурудзи ви вирощуєте?',
    answer:
      'Ми спеціалізуємося на вирощуванні спеціальних сортів кукурудзи для попкорну, а також інших зернових культур.',
  },
  {
    question: 'Чи здійснюєте ви експорт?',
    answer: 'Так, ми експортуємо нашу продукцію в більш ніж 10 країн світу.',
  },
  {
    question: 'Як забезпечується якість продукції?',
    answer:
      'Ми маємо власну лабораторію контролю якості та дотримуємося всіх міжнародних стандартів.',
  },
  {
    question: 'Які умови співпраці?',
    answer: 'Ми пропонуємо гнучкі умови співпраці та індивідуальний підхід до кожного клієнта.',
  },
  {
    question: 'Чи надаєте ви зразки продукції?',
    answer:
      'Так, ми надаємо зразки нашої продукції для тестування якості перед укладанням контракту.',
  },
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Ліва колонка з зображенням */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky order-2 lg:order-1 top-24"
          >
            <div className="relative h-[720px] rounded-2xl overflow-hidden ">
              <Image src="/demo/f4.jpg" alt="Поле кукурудзи" fill className="object-cover " />
              {/* Оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent" />
            </div>

            {/* Статистика */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-1">15+</div>
                    <div className="text-sm text-gray-600">років досвіду</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">гектарів землі</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Права колонка з FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
              Часті питання
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Відповіді на ваші
              <span className="block text-green-700">запитання</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Знайдіть відповіді на найпоширеніші запитання про нашу компанію та продукцію
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                      expandedId === index ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    {/* Заголовок питання */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedId(expandedId === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        <div className="size-8 aspect-square rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors group-hover:border-green-500">
                          {expandedId === index ? (
                            <Minus className="size-4 text-green-500" />
                          ) : (
                            <Plus className="size-4 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Розгорнута відповідь */}
                    <AnimatePresence>
                      {expandedId === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Додаткова інформація */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100"
            >
              <p className="text-green-800 font-medium">Не знайшли відповідь на своє запитання?</p>
              <p className="text-green-600 mt-2">
                Зв&apos;яжіться з нашою службою підтримки, і ми з радістю допоможемо вам.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
