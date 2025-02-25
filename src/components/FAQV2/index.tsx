import * as motion from 'motion/react-client'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Які сорти кукурудзи ви вирощуєте?',
    answer:
      'Ми спеціалізуємося на вирощуванні спеціальних сортів кукурудзи для попкорну, а також інших зернових культур. Наші сорти відрізняються високою якістю та відповідають міжнародним стандартам.',
  },
  {
    question: 'Як здійснюється контроль якості?',
    answer:
      'Наша компанія має власну сертифіковану лабораторію, де проводиться повний аналіз продукції на всіх етапах виробництва. Ми також співпрацюємо з міжнародними сертифікаційними органами.',
  },
  {
    question: 'Чи здійснюєте ви експорт?',
    answer:
      'Так, ми експортуємо нашу продукцію в більш ніж 10 країн світу. Маємо всі необхідні сертифікати та дозволи для міжнародної торгівлі.',
  },
  {
    question: 'Які умови співпраці?',
    answer:
      'Ми пропонуємо гнучкі умови співпраці та індивідуальний підхід до кожного клієнта. Можливі різні варіанти оплати та доставки.',
  },
  // Додайте більше питань за потреби
]

export default function FAQV2() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Ліва колонка з текстом */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="sticky top-20">
              <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
                FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Відповіді на ваші запитання
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ми зібрали найпоширеніші запитання про нашу компанію та продукцію. Якщо у вас
                залишились додаткові питання, звертайтесь до нашої служби підтримки.
              </p>

              <div className="relative">
                <Image
                  src="/agro-media/3.jpg"
                  alt="Поле кукурудзи"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
                {/* Декоративні елементи */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Права колонка з акордеоном */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline data-[state=open]:text-green-700">
                      <span className="text-lg font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="prose prose-green">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Додаткова інформація */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 bg-green-50 rounded-xl border border-green-100"
            >
              <p className="text-green-800 font-medium">Не знайшли відповідь на своє запитання?</p>
              <p className="text-green-600 mt-2">
                Зв'яжіться з нашою службою підтримки, і ми з радістю допоможемо вам.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
