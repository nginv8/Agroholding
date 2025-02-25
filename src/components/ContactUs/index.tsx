'use client'

import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Зв'яжіться з нами
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Маєте питання? Зв'яжіться з нами, і ми будемо раді допомогти
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Телефон</h3>
                <p className="text-gray-600">+380 (50) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Email</h3>
                <p className="text-gray-600">contact@agroholding.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Адреса</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ім'я
                  </label>
                  <Input placeholder="Ваше ім'я" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input type="email" placeholder="ваш@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <Input placeholder="Тема повідомлення" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Повідомлення
                </label>
                <Textarea
                  placeholder="Ваше повідомлення..."
                  className="min-h-[150px]"
                />
              </div>
            </div>
            <Button className="w-full">Надіслати</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
