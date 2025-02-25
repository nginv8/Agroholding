import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Про нас</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/agro-media/2.jpg"
              alt="Наші поля"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-700">Лідери у вирощуванні попкорну</h3>
            <p className="text-gray-600 leading-relaxed">
              Наша компанія спеціалізується на вирощуванні найякісніших сортів кукурудзи для
              попкорну, а також інших сільськогосподарських культур. Ми поєднуємо традиційні методи
              землеробства з сучасними технологіями для досягнення найкращих результатів.
            </p>
            <ul className="space-y-3">
              {[
                'Понад 1000 гектарів оброблюваних земель',
                'Сучасна сільськогосподарська техніка',
                'Власна лабораторія контролю якості',
                'Експорт продукції у понад 10 країн',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
