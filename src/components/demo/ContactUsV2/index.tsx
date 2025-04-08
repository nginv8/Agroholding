import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, Send, Building, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    details: ['+380 (50) 123-45-67', '+380 (50) 765-43-21'],
    description: 'Пн-Пт: 9:00 - 18:00',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@agroholding.com', 'support@agroholding.com'],
    description: 'Відповідаємо протягом 24 годин',
  },
  {
    icon: MapPin,
    title: 'Адреса',
    details: ['вул. Центральна, 123', 'м. Київ, 01001'],
    description: 'Головний офіс',
  },
  {
    icon: Clock,
    title: 'Графік роботи',
    details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Нд: Вихідний'],
    description: 'Час вказано за Києвом',
  },
]

export default function ContactFormV2() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Ліва колонка з формою */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
              Зв&apos;яжіться з нами
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Готові до співпраці?
              <span className="block text-green-700">Напишіть нам</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Заповніть форму нижче, і наші спеціалісти зв&apos;яжуться з вами протягом 24 годин для
              обговорення деталей співпраці.
            </p>

            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Ім&apos;я</label>
                  <Input placeholder="Ваше ім'я" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Прізвище</label>
                  <Input placeholder="Ваше прізвище" className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <Input type="email" placeholder="ваш@email.com" className="h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Тема звернення</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Оберіть тему" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cooperation">Співпраця</SelectItem>
                    <SelectItem value="products">Продукція</SelectItem>
                    <SelectItem value="support">Підтримка</SelectItem>
                    <SelectItem value="other">Інше</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Повідомлення</label>
                <Textarea
                  placeholder="Ваше повідомлення..."
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button size="lg" className="w-full h-12 text-base group">
                Надіслати повідомлення
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Права колонка з інформацією */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Карта */}
            {/* <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/agro-media/2.jpg" alt="Карта" fill className="object-cover" /> */}
            {/* Маркер на карті */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div> */}
            {/* Пульсуючий ефект */}
            {/* <div className="absolute top-0 left-0 w-6 h-6 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
              </div>
            </div> */}

            {/* Контактна інформація */}
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl" />
                  <div className="relative p-6">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <info.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Додаткова інформація */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Відділ корпоративних клієнтів
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Для великих замовлень та корпоративних клієнтів у нас діє спеціальна програма
                    співпраці
                  </p>
                  <Button variant="outline" size="lg" className="group">
                    Дізнатись більше
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
