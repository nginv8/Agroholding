import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterV2() {
  return (
    <footer className="relative bg-green-950 text-white overflow-hidden">
      {/* Декоративний фон */}
      <div className="absolute inset-0 z-0">
        <Image src="/demo/field8.jpg" alt="Background" fill className="object-cover opacity-5" />
      </div>

      {/* Основний контент */}
      <div className="relative z-10">
        {/* Верхня секція */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Ліва колонка */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl font-bold mb-8">Залишайтесь на зв&apos;язку</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-lg">
                Підпишіться на нашу розсилку, щоб отримувати останні новини та спеціальні пропозиції
                від нашої компанії.
              </p>

              <form className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
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
                      className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <Icon className="h-6 w-6" />
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
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-lg font-semibold mb-6">Контакти</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                      <p className="text-gray-300">
                        вул. Центральна, 123
                        <br />
                        м. Київ, 01001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <p className="text-gray-300">+380 (50) 123-45-67</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <p className="text-gray-300">contact@agroholding.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Швидкі посилання</h3>
                <ul className="space-y-3">
                  {['Про нас', 'Продукція', 'Новини', "Кар'єра", 'Контакти'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Політика конфіденційності
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Image
                src="/logo-light.svg"
                alt="Наша команда"
                width="160"
                height="48"
                className="h-14 w-auto"
              />

              <p className="text-gray-400 text-sm">
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
  )
}
