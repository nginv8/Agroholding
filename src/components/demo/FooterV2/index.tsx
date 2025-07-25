import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function FooterV2() {
  return (
    <footer className="relative overflow-hidden bg-green-950 text-white">
      {/* Декоративний фон */}
      <div className="absolute inset-0 z-0">
        <Image src="/demo/field8.jpg" alt="Background" fill className="object-cover opacity-5" />
      </div>

      {/* Основний контент */}
      <div className="relative z-10">
        {/* Верхня секція */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Ліва колонка */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="mb-8 text-4xl font-bold">Залишайтесь на зв&apos;язку</h2>
              <p className="mb-12 max-w-lg text-lg leading-relaxed text-gray-300">
                Підпишіться на нашу розсилку, щоб отримувати останні новини та спеціальні пропозиції
                від нашої компанії.
              </p>

              <form className="max-w-md space-y-6">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button size="lg" className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                  Підписатися на новини
                </Button>
              </form>

              <div className="mt-12">
                <div className="flex space-x-6">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10"
                    >
                      <Icon className="size-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Права колонка */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-12 md:grid-cols-2"
            >
              <div>
                <h3 className="mb-6 text-lg font-semibold">Контакти</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="mt-1 size-5 text-yellow-500" />
                    <div>
                      <p className="text-gray-300">
                        вул. Центральна, 123
                        <br />
                        м. Київ, 01001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="size-5 text-yellow-500" />
                    <p className="text-gray-300">+380 (50) 123-45-67</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="size-5 text-yellow-500" />
                    <p className="text-gray-300">contact@agroholding.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-semibold">Швидкі посилання</h3>
                <ul className="space-y-3">
                  {['Про нас', 'Продукція', 'Новини', "Кар'єра", 'Контакти'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                      Політика конфіденційності
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="text-gray-300 transition-colors hover:text-white">
                      Умови використання
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Нижня секція */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Image
                src="/logo-light.svg"
                alt="Наша команда"
                width="160"
                height="48"
                className="h-14 w-auto"
              />

              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} AgroHolding. Всі права захищені.
              </p>
              {/* <div className="flex gap-6 items-center">
                Theme:
                <ThemeSelector />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
