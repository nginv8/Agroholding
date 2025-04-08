'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MapPin, Clock, Briefcase, Plus, Minus, ArrowRight, Users } from 'lucide-react'
import { useState } from 'react'

const positions = [
  {
    id: 1,
    title: 'Головний агроном',
    location: 'Київська область',
    type: 'Повна зайнятість',
    experience: '3-5 років',
    requirements: [
      'Вища профільна освіта',
      'Досвід роботи на аналогічній посаді',
      'Знання сучасних агротехнологій',
      'Навички управління персоналом',
    ],
  },
  {
    id: 2,
    title: 'Інженер-механік',
    location: 'Полтавська область',
    type: 'Повна зайнятість',
    experience: 'від 2 років',
    requirements: [
      'Технічна освіта',
      'Досвід ремонту сільгосптехніки',
      'Знання гідравлічних систем',
      'Вміння працювати з документацією',
    ],
  },
  {
    id: 3,
    title: 'Менеджер з логістики',
    location: 'Черкаська область',
    type: 'Повна зайнятість',
    experience: '2-3 роки',
    requirements: [
      'Вища освіта',
      'Досвід у сфері логістики',
      'Знання ринку перевезень',
      'Навички ведення переговорів',
    ],
  },
]

export default function CareersSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Зображення (1/2 ширини) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 lg:order-2"
          >
            <div className="relative h-[720px] rounded-2xl overflow-hidden">
              <Image
                src="/demo/team2.jpg"
                alt="Команда AgroHolding"
                fill
                className="object-cover"
              />
              {/* Градієнтний оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Статистика */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">150+</div>
                    <div className="text-sm opacity-80">співробітників</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">12+</div>
                    <div className="text-sm opacity-80">років досвіду</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Контент (2/3 ширини) */}
          <div className="lg:col-span-1">
            <Title
              title="Кар'єра в нашій компанії"
              boldPart="нашій компанії"
              subtitle="Приєднуйтесь до команди професіоналів та розвивайтеся разом з нами"
            />

            <div className="space-y-4">
              {positions.map((position) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {/* Заголовок позиції */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedId(expandedId === position.id ? null : position.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1.5" />
                              {position.location}
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1.5" />
                              {position.type}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1.5" />
                              {position.experience}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center transition-colors group-hover:border-green-500">
                            {expandedId === position.id ? (
                              <Minus className="w-5 h-5 text-green-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Розгорнутий контент */}
                    <AnimatePresence>
                      {expandedId === position.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <div className="pt-6 border-t border-gray-100">
                              <h4 className="font-medium mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-green-600" />
                                Вимоги до кандидата:
                              </h4>
                              <ul className="space-y-3 mb-6">
                                {position.requirements.map((req, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center text-gray-600"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-3" />
                                    {req}
                                  </motion.li>
                                ))}
                              </ul>
                              <Button className="w-full sm:w-auto group">
                                Відгукнутися
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
