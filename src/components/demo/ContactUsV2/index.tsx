import { ArrowRight, Building, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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
];

export default function ContactFormV2() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Фонові декоративні елементи */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-gradient-to-b from-white to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Ліва колонка з формою */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
              Зв&apos;яжіться з нами
            </span>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Готові до співпраці?
              <span className="block text-green-700">Напишіть нам</span>
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-600">
              Заповніть форму нижче, і наші спеціалісти зв&apos;яжуться з вами протягом 24 годин для
              обговорення деталей співпраці.
            </p>

            <form className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
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

              <Button size="lg" className="group h-12 w-full text-base">
                Надіслати повідомлення
                <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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
            <div className="grid gap-8 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50 to-transparent" />
                  <div className="relative p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green-100 transition-colors group-hover:bg-green-200">
                      <info.icon className="size-6 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                    <p className="mt-2 text-sm text-gray-500">{info.description}</p>
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
              className="rounded-2xl bg-green-50 p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <Building className="size-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Відділ корпоративних клієнтів
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Для великих замовлень та корпоративних клієнтів у нас діє спеціальна програма
                    співпраці
                  </p>
                  <Button variant="outline" size="lg" className="group">
                    Дізнатись більше
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
