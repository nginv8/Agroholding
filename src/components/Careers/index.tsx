import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  MapPin,
  Clock,
  Banknote,
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle2,
  Building2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const jobs = [
  {
    id: 1,
    title: 'Агроном',
    department: 'Виробництво',
    location: 'Київська область',
    type: 'Повна зайнятість',
    salary: '25 000 - 35 000 грн',
    experience: '3-5 років',
    education: 'Вища агрономічна',
    description:
      'Ми шукаємо досвідченого агронома для управління та оптимізації процесів вирощування сільськогосподарських культур.',
    responsibilities: [
      'Планування та організація посівних робіт',
      'Контроль якості продукції на всіх етапах вирощування',
      'Впровадження нових технологій та методів обробки землі',
      'Ведення документації та звітності',
    ],
    requirements: [
      'Вища освіта за спеціальністю',
      'Досвід роботи від 3 років',
      'Знання сучасних агротехнологій',
      'Навички роботи з GPS-системами',
    ],
    benefits: [
      'Конкурентна заробітна плата',
      'Медичне страхування',
      'Корпоративний транспорт',
      'Можливості професійного розвитку',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'Механізатор',
    department: 'Виробництво',
    location: 'Київська область',
    type: 'Повна зайнятість',
    salary: '20 000 - 30 000 грн',
    experience: '2-3 роки',
    education: 'Середня спеціальна',
    description:
      'Запрошуємо до команди досвідченого механізатора для роботи на сучасній сільськогосподарській техніці.',
    responsibilities: [
      'Керування та обслуговування сільгосптехніки',
      'Проведення польових робіт',
      'Технічне обслуговування техніки',
      'Ведення звітності про виконані роботи',
    ],
    requirements: [
      'Досвід роботи від 2 років',
      'Наявність посвідчення тракториста',
      'Знання сучасної сільгосптехніки',
      'Відповідальність та пунктуальність',
    ],
    benefits: [
      'Офіційне працевлаштування',
      'Харчування',
      'Корпоративний транспорт',
      'Премії за результатами роботи',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Менеджер з продажу',
    department: 'Продажі',
    location: 'Київ',
    type: 'Повна зайнятість',
    salary: '30 000 - 45 000 грн',
    experience: '3-5 років',
    education: 'Вища',
    description:
      'Шукаємо енергійного менеджера з продажу для розвитку нових напрямків та роботи з ключовими клієнтами.',
    responsibilities: [
      'Пошук та залучення нових клієнтів',
      'Ведення переговорів та укладання договорів',
      'Супровід угод та контроль поставок',
      'Аналіз ринку та конкурентів',
    ],
    requirements: [
      'Досвід роботи в продажах від 3 років',
      'Знання ринку агропродукції',
      'Навички ведення переговорів',
      'Знання англійської мови',
    ],
    benefits: [
      'Висока заробітна плата + бонуси',
      'Медичне страхування',
      'Корпоративний автомобіль',
      'Навчання та тренінги',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function CareersV2() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
            Кар'єра в AgroHolding
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Приєднуйтесь до команди
            <span className="block text-green-700">професіоналів</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ми пропонуємо цікаві можливості для професійного розвитку та зростання в одній з
            провідних агрокомпаній України
          </p>
        </motion.div>

        {/* Переваги роботи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {[
            {
              icon: Building2,
              title: 'Стабільна компанія',
              description: '15+ років успішної роботи на ринку та постійний розвиток',
            },
            {
              icon: Users,
              title: 'Професійна команда',
              description: 'Можливість працювати з найкращими фахівцями галузі',
            },
            {
              icon: GraduationCap,
              title: 'Навчання та розвиток',
              description: 'Регулярні тренінги та програми підвищення кваліфікації',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Список вакансій */}
        <div className="grid lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            {job.experience}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Banknote className="w-4 h-4 mr-2" />
                            {job.salary}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {job.education}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                      <Image
                        src={job.image || '/placeholder.svg'}
                        alt={job.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Обов'язки:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Вимоги:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ми пропонуємо:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group">
                    Відгукнутися на вакансію
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-green-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Не знайшли підходящу вакансію?
              </h3>
              <p className="text-gray-600 mb-6">
                Надішліть нам своє резюме, і ми повідомимо вас, коли з'явиться відповідна позиція
              </p>
              <Button variant="outline" size="lg" className="group">
                Надіслати резюме
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Кар'єра"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
