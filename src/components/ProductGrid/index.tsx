import * as motion from 'motion/react-client'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Title } from '../ui/title'

const products = [
  {
    id: 1,
    name: 'Преміум попкорн',
    description:
      'Найкраща кукурудза для попкорну преміум якості з відмінними смаковими характеристиками',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 2,
    name: 'Золота кукурудза',
    description: 'Спеціальний сорт кукурудзи для професійного використання з високою врожайністю',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 3,
    name: 'Органік попкорн',
    description: 'Органічна кукурудза для попкорну, вирощена без використання хімікатів',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 4,
    name: 'Солодка кукурудза',
    description: 'Спеціальний сорт солодкої кукурудзи для свіжого споживання та консервування',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 5,
    name: 'Кормова кукурудза',
    description: 'Високоврожайний сорт кукурудзи для виробництва кормів',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 6,
    name: 'Насіннєва кукурудза',
    description: 'Елітне насіння кукурудзи для професійного вирощування',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 7,
    name: 'Біла кукурудза',
    description: 'Спеціальний сорт білої кукурудзи для виробництва крупи та борошна',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 8,
    name: 'Цукрова кукурудза',
    description: 'Надсолодкий сорт кукурудзи з підвищеним вмістом цукру',
    image: '/placeholder.svg?height=400&width=400',
  },
]

export default function ProductGrid() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title
          title="Широкий асортимент якісної продукції"
          boldPart="якісної продукції"
          subtitle="Ми пропонуємо різноманітні сорти кукурудзи та інших культур, які відповідають найвищим стандартам якості"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <span className="inline-flex items-center text-green-700 font-medium group-hover:text-green-600">
                  Детальніше
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group">
            Показати більше
            <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
