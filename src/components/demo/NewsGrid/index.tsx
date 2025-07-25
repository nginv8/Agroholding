'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/demo/l1.jpg',
  },
  {
    id: 2,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/demo/w1.jpg',
  },
  {
    id: 3,
    title: 'Новий врожай кукурудзи для попкорну',
    excerpt: 'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну...',
    date: '2024-02-15',
    image: '/demo/t5.jpg',
  },
];

export default function NewsGrid() {
  return (
    <section className="overflow-hidden bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <Title
          title="Інновації та розвиток для майбутнього"
          boldPart="Інновації та розвиток"
          subtitle="Ми постійно розвиваємося та впроваджуємо інноваційні рішення для покращення якості нашої продукції та збереження довкілля"
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="overflow-hidden rounded-lg bg-white shadow-lg"
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
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 size-4" />
                    {new Date(post.date).toLocaleDateString('uk-UA')}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-green-800">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
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
  );
}
