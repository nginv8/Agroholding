import Image from 'next/image';
import { Mail, Phone, Send } from 'lucide-react';
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

import { Title } from '../../ui/title';

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
];

export default function ContactFormV2() {
  return (
    <section className="relative flex min-h-screen items-center py-20">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image src="/demo/field6.jpg" alt="Поле пшениці" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 to-green-950/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Ліва колонка з формою */}
          <div>
            <Title
              title="Готові до співпраці? {{Напишіть нам}}"
              subtitle="Заповніть форму нижче, і наші спеціалісти зв'яжуться з вами протягом 24 годин для обговорення деталей співпраці."
              align="left"
              style="light"
              className="max-w-full overflow-hidden"
            />
            <div className="grid gap-8 sm:grid-cols-2">
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
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-yellow-400/20">
                        <info.icon className="size-6 text-yellow-400" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                      <p className="mt-2 text-sm text-gray-400">{info.description}</p>
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
              className="mt-12 overflow-hidden"
            >
              <a
                className="relative block h-[360px] overflow-hidden rounded-2xl"
                href="https://www.google.com/maps/search/Semypolky+%D0%B2%D1%83%D0%BB.+%D0%84%D1%81%D0%B5%D0%BD%D1%96%D0%BD%D0%B0,%D0%B1.54/@50.7331267,30.9295843,17z?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <Image src="/demo/map.jpg" alt="Карта" fill className="object-cover" />
                {/* Маркер на карті */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="flex size-6 items-center justify-center rounded-full bg-green-600">
                      <div className="size-3 rounded-full bg-white" />
                    </div>
                    {/* Пульсуючий ефект */}
                    <div className="absolute left-0 top-0 size-6 animate-ping rounded-full bg-yellow-400 opacity-75" />
                  </div>
                </div>
                <div className="absolute inset-x-4 top-4 rounded-full bg-white px-6 py-2 shadow-lg">
                  <span>Україна, Київська обл., с. Семиполки, вул. Єсеніна,б.54</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Права колонка з інформацією */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-24 rounded-2xl bg-white/10 px-4 py-8 backdrop-blur-md lg:p-12"
          >
            <form className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Ім&apos;я</label>
                  <Input
                    placeholder="Ваше ім'я"
                    className="h-12 border-white/20 bg-white/10 text-white transition-colors placeholder:text-white/60 focus:border-yellow-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Прізвище</label>
                  <Input
                    placeholder="Ваше прізвище"
                    className="h-12 border-white/20 bg-white/10 text-white transition-colors placeholder:text-white/60 focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Email</label>
                <Input
                  type="email"
                  placeholder="ваш@email.com"
                  className="h-12 border-white/20 bg-white/10 text-white transition-colors placeholder:text-white/60 focus:border-yellow-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Тема звернення</label>
                <Select>
                  <SelectTrigger className="h-12 border-white/20 bg-white/10 text-white transition-colors focus:border-yellow-400">
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
                  className="min-h-[150px] resize-none border-white/20 bg-white/10 text-white transition-colors placeholder:text-white/60 focus:border-yellow-400"
                />
              </div>

              <Button
                size="lg"
                className="group h-12 w-full bg-yellow-400 text-base text-black hover:bg-yellow-500"
              >
                Надіслати повідомлення
                <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
