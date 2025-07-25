'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-green-800">Зв&apos;яжіться з нами</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-yellow-500"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Маєте питання? Зв&apos;яжіться з нами, і ми будемо раді допомогти
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Phone className="mt-1 size-6 text-green-600" />
              <div>
                <h3 className="mb-1 font-semibold text-green-800">Телефон</h3>
                <p className="text-gray-600">+380 (50) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="mt-1 size-6 text-green-600" />
              <div>
                <h3 className="mb-1 font-semibold text-green-800">Email</h3>
                <p className="text-gray-600">contact@agroholding.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 size-6 text-green-600" />
              <div>
                <h3 className="mb-1 font-semibold text-green-800">Адреса</h3>
                <p className="text-gray-600">вул. Центральна, 123, м. Київ</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Ім&apos;я</label>
                  <Input placeholder="Ваше ім'я" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" placeholder="ваш@email.com" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Тема</label>
                <Input placeholder="Тема повідомлення" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Повідомлення</label>
                <Textarea placeholder="Ваше повідомлення..." className="min-h-[150px]" />
              </div>
            </div>
            <Button className="w-full">Надіслати</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
