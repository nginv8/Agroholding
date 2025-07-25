'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Briefcase, Clock, MapPin, Minus, Plus, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';

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
];

export default function CareersSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Зображення (1/2 ширини) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 lg:order-2"
          >
            <div className="relative h-[720px] overflow-hidden rounded-2xl">
              <Image
                src="/demo/team2.jpg"
                alt="Команда AgroHolding"
                fill
                className="object-cover"
              />
              {/* Градієнтний оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Статистика */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-1 text-3xl font-bold">150+</div>
                    <div className="text-sm opacity-80">співробітників</div>
                  </div>
                  <div>
                    <div className="mb-1 text-3xl font-bold">12+</div>
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
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    {/* Заголовок позиції */}
                    <div
                      className="cursor-pointer p-6 transition-colors hover:bg-gray-50"
                      onClick={() => setExpandedId(expandedId === position.id ? null : position.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="mb-3 text-xl font-semibold">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <MapPin className="mr-1.5 size-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="mr-1.5 size-4" />
                              {position.type}
                            </span>
                            <span className="flex items-center">
                              <Clock className="mr-1.5 size-4" />
                              {position.experience}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="flex size-10 items-center justify-center rounded-full border-2 border-gray-200 transition-colors group-hover:border-green-500">
                            {expandedId === position.id ? (
                              <Minus className="size-5 text-green-600" />
                            ) : (
                              <Plus className="size-5 text-gray-400" />
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
                            <div className="border-t border-gray-100 pt-6">
                              <h4 className="mb-4 flex items-center font-medium">
                                <Users className="mr-2 size-5 text-green-600" />
                                Вимоги до кандидата:
                              </h4>
                              <ul className="mb-6 space-y-3">
                                {position.requirements.map((req, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center text-gray-600"
                                  >
                                    <div className="mr-3 size-1.5 rounded-full bg-green-600" />
                                    {req}
                                  </motion.li>
                                ))}
                              </ul>
                              <Button className="group w-full sm:w-auto">
                                Відгукнутися
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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
  );
}
