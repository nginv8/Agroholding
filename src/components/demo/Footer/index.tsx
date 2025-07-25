import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-green-900 text-white">
      {/* Основний контент футера */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Інформація про компанію */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="mb-6 block text-2xl font-bold">
              <Image
                src="/logo-light.svg"
                alt="Наша команда"
                width="160"
                height="48"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-gray-300">
              Провідний виробник попкорну та інших зернових культур в Україні. Ми поєднуємо традиції
              землеробства з сучасними технологіями.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <social.icon className="size-6" />
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
            <h3 className="mb-6 text-lg font-semibold">Компанія</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
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
            <h3 className="mb-6 text-lg font-semibold">Продукція</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
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
            <h3 className="mb-6 text-lg font-semibold">Ресурси</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
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
          className="mt-12 border-t border-green-800 pt-12"
        >
          <div className="mx-auto max-w-md text-center">
            <h3 className="mb-4 text-lg font-semibold">Підпишіться на наші новини</h3>
            <p className="mb-6 text-gray-300">Отримуйте останні новини та спеціальні пропозиції</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="border-green-700 bg-green-800 text-white placeholder:text-gray-300"
              />
              <Button type="submit" variant="secondary" size="icon">
                <Send className="size-4" />
                <span className="sr-only">Підписатися</span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Копірайт */}
      <div className="border-t border-green-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} AgroHolding. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
