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
import { Phone, Mail, Send } from 'lucide-react'
import Image from 'next/image'
import { Title } from '../ui/title'

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
  // {
  //   icon: MapPin,
  //   title: 'Адреса',
  //   details: ['вул. Центральна, 123', 'м. Київ, 01001'],
  //   description: 'Головний офіс',
  // },
  // {
  //   icon: Clock,
  //   title: 'Графік роботи',
  //   details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Нд: Вихідний'],
  //   description: 'Час вказано за Києвом',
  // },
]

export default function ContactFormV2() {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image src="/demo/field6.jpg" alt="Поле пшениці" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 to-green-950/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Ліва колонка з формою */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Title
              title="Готові до співпраці? Напишіть нам"
              boldPart="Напишіть нам"
              subtitle="Заповніть форму нижче, і наші спеціалісти зв'яжуться з вами протягом 24 годин для обговорення деталей співпраці."
              align="left"
              style="light"
            />
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                        <info.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Карта */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <a
                className="relative block h-[360px] rounded-2xl overflow-hidden"
                href="https://www.google.com/maps/search/Semypolky+%D0%B2%D1%83%D0%BB.+%D0%84%D1%81%D0%B5%D0%BD%D1%96%D0%BD%D0%B0,%D0%B1.54/@50.7331267,30.9295843,17z?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <Image src="/demo/map.jpg" alt="Карта" fill className="object-cover" />
                {/* Маркер на карті */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    {/* Пульсуючий ефект */}
                    <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 bg-white py-2 px-6 rounded-full shadow-lg">
                  <span>Україна, Київська обл., с. Семиполки, вул. Єсеніна,б.54</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Права колонка з інформацією */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 sticky top-24"
          >
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Ім&apos;я</label>
                  <Input
                    placeholder="Ваше ім'я"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Прізвище</label>
                  <Input
                    placeholder="Ваше прізвище"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Email</label>
                <Input
                  type="email"
                  placeholder="ваш@email.com"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Тема звернення</label>
                <Select>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white focus:border-yellow-400 transition-colors">
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
                <label className="text-sm font-medium text-gray-200">Повідомлення</label>
                <Textarea
                  placeholder="Ваше повідомлення..."
                  className="min-h-[150px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 transition-colors"
                />
              </div>

              <Button
                size="lg"
                className="w-full h-12 text-base bg-yellow-400 hover:bg-yellow-500 text-black group"
              >
                Надіслати повідомлення
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
