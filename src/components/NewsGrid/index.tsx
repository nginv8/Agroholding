'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Title } from '../ui/title'

type Post = {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
}

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/agro-media/1.jpg',
  },
  {
    id: 2,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/agro-media/2.jpg',
  },
  {
    id: 3,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/agro-media/3.jpg',
  },
  // Add more sample posts...
]

export default function NewsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title
          title="Інновації та розвиток для майбутнього"
          boldPart="Інновації та розвиток"
          subtitle="Ми постійно розвиваємося та впроваджуємо інноваційні рішення для покращення якості нашої продукції та збереження довкілля"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('uk-UA')}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Читати далі
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
