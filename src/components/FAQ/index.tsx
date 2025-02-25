import * as motion from 'motion/react-client'
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
      'Ми спеціалізуємося на вирощуванні спеціальних сортів кукурудзи для попкорну, а також інших зернових культур.',
  },
  {
    question: 'Чи здійснюєте ви експорт?',
    answer: 'Так, ми експортуємо нашу продукцію в більш ніж 10 країн світу.',
  },
  {
    question: 'Як забезпечується якість продукції?',
    answer:
      'Ми маємо власну лабораторію контролю якості та дотримуємося всіх міжнародних стандартів.',
  },
  // Add more FAQs...
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Часті питання</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Відповіді на найпоширеніші запитання про нашу компанію та продукцію
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
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
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg">
                  <AccordionTrigger className="px-6 text-green-800 hover:text-green-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
