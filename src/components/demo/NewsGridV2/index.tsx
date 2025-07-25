'use client';

import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

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
];

export default function NewsGridV2() {
  return (
    <section className="overflow-hidden bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-start justify-between lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-8 max-w-2xl lg:mb-0"
          >
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-yellow-600">
              Новини компанії
            </span>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Останні події та досягнення
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
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
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {samplePosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Категорія */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 size-4" />
                    {new Date(post.date).toLocaleDateString('uk-UA')}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-700">
                    {post.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 text-gray-600">{post.excerpt}</p>

                  <button className="group/btn inline-flex items-center font-medium text-green-700 transition-colors hover:text-green-600">
                    Читати далі
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
