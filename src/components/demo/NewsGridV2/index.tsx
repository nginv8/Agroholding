'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Post = {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Інновації в вирощуванні попкорну',
    excerpt:
      'Впровадження нових технологій для підвищення якості та врожайності спеціальних сортів кукурудзи...',
    date: '2024-02-15',
    image: '/demo/w3.jpg',
    category: 'Технології',
  },
  {
    id: 2,
    title: 'Міжнародна сертифікація якості',
    excerpt:
      'Наша компанія успішно пройшла міжнародну сертифікацію якості та відповідає найвищим стандартам...',
    date: '2024-02-10',
    image: '/demo/l6.jpg',
    category: 'Досягнення',
  },
  {
    id: 3,
    title: 'Розширення експортних напрямків',
    excerpt:
      'Відкриття нових експортних напрямків та укладання контрактів з провідними світовими компаніями...',
    date: '2024-02-05',
    image: '/demo/t5.jpg',
    category: 'Бізнес',
  },
]

export default function NewsGridV2() {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl mb-8 lg:mb-0"
          >
            <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
              Новини компанії
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Останні події та досягнення
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Слідкуйте за останніми новинами та подіями нашої компанії. Дізнавайтесь першими про
              інновації, досягнення та розвиток.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Button size="lg" variant="outline" className="group">
              Всі новини
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Категорія */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('uk-UA')}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>

                  <button className="inline-flex items-center text-green-700 hover:text-green-600 font-medium transition-colors group/btn">
                    Читати далі
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
