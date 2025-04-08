import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  company: [
    { name: 'Про нас', href: '#' },
    { name: 'Команда', href: '#' },
    { name: "Кар'єра", href: '#' },
    { name: 'Контакти', href: '#' },
  ],
  products: [
    { name: 'Попкорн', href: '#' },
    { name: 'Кукурудза', href: '#' },
    { name: 'Зернові', href: '#' },
    { name: 'Насіння', href: '#' },
  ],
  resources: [
    { name: 'Блог', href: '#' },
    { name: 'Новини', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Документація', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white overflow-hidden">
      {/* Основний контент футера */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Інформація про компанію */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="text-2xl font-bold mb-6 block">
              <Image
                src="/logo-light.svg"
                alt="Наша команда"
                width="160"
                height="48"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Провідний виробник попкорну та інших зернових культур в Україні. Ми поєднуємо традиції
              землеробства з сучасними технологіями.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Навігаційні посилання */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Компанія</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Продукція</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">Ресурси</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Форма підписки на новини */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-green-800 mt-12 pt-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Підпишіться на наші новини</h3>
            <p className="text-gray-300 mb-6">Отримуйте останні новини та спеціальні пропозиції</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-green-800 border-green-700 text-white placeholder:text-gray-300"
              />
              <Button type="submit" variant="secondary" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Підписатися</span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Копірайт */}
      <div className="border-t border-green-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} AgroHolding. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
