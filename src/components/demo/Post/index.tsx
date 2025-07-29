import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Share2, Tag, Twitter } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

// Демо дані для поста
const postData = {
  title: 'Новий врожай кукурудзи для попкорну: рекордні показники 2024 року',
  excerpt:
    'Цього року ми зібрали рекордний врожай спеціальної кукурудзи для попкорну, що дозволить нам розширити експорт та покращити якість продукції.',
  content: `
    <p>Цього року наша компанія досягла видатних результатів у вирощуванні спеціальної кукурудзи для попкорну. Завдяки впровадженню інноваційних агротехнологій та сприятливим погодним умовам, ми зібрали рекордний врожай, який перевищив минулорічні показники на 25%.</p>

    <h2>Ключові досягнення сезону</h2>
    <p>Наша команда агрономів працювала над оптимізацією процесів вирощування протягом усього сезону. Основні результати включають:</p>
    
    <ul>
      <li>Збільшення врожайності на 25% порівняно з минулим роком</li>
      <li>Покращення якості зерна завдяки новим сортам</li>
      <li>Зменшення використання води на 15% через систему краплинного зрошення</li>
      <li>Впровадження органічних методів захисту рослин</li>
    </ul>

    <h2>Інноваційні технології</h2>
    <p>Цього сезону ми активно використовували передові технології для моніторингу стану посівів. Дрони з мультиспектральними камерами дозволили нам відстежувати розвиток рослин у режимі реального часу та своєчасно реагувати на будь-які зміни.</p>

    <p>Система точного землеробства допомогла оптимізувати внесення добрив та засобів захисту рослин, що не тільки покращило врожайність, але й зменшило вплив на навколишнє середовище.</p>

    <h2>Якість продукції</h2>
    <p>Особливу увагу ми приділили якості зерна. Нові сорти кукурудзи для попкорну мають підвищений коефіцієнт розкриття та відмінні смакові характеристики. Лабораторні дослідження показали, що наша продукція відповідає найвищим міжнародним стандартам.</p>

    <h2>Перспективи експорту</h2>
    <p>Рекордний врожай дозволить нам значно розширити експортні поставки. Ми вже уклали договори з новими партнерами в країнах ЄС та плануємо вийти на ринки Азії. Це стане важливим кроком у розвитку нашої компанії та зміцненні позицій на міжнародному ринку.</p>
  `,
  author: 'Олександр Коваленко',
  authorRole: 'Головний агроном',
  authorAvatar: '/placeholder.svg?height=100&width=100',
  publishedAt: '2024-02-15',
  readTime: '5 хв читання',
  category: 'Виробництво',
  tags: ['кукурудза', 'врожай', 'технології', 'експорт'],
  featuredImage: '/placeholder.svg?height=600&width=1200',
  gallery: [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ],
};

const relatedPosts = [
  {
    title: 'Міжнародна сертифікація ISO',
    excerpt: 'Наша компанія успішно пройшла сертифікацію за стандартами ISO 9001:2015',
    image: '/placeholder.svg?height=200&width=300',
    slug: 'iso-certification',
    date: '2024-02-10',
  },
  {
    title: 'Розширення земельного банку',
    excerpt: 'Ми придбали додаткові 200 гектарів родючої землі для розширення виробництва',
    image: '/placeholder.svg?height=200&width=300',
    slug: 'land-expansion',
    date: '2024-02-05',
  },
  {
    title: 'Нові технології в агробізнесі',
    excerpt: 'Впровадження дронів та систем точного землеробства на наших полях',
    image: '/placeholder.svg?height=200&width=300',
    slug: 'new-technologies',
    date: '2024-01-28',
  },
];

export default function Post() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        {/* Hero секція */}
        <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Навігація назад */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Link
                  href="/news"
                  className="inline-flex items-center text-green-600 transition-colors hover:text-green-700"
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Повернутися до новин
                </Link>
              </motion.div>

              {/* Мета інформація */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 flex flex-wrap items-center gap-4"
              >
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  <Tag className="mr-1 size-3" />
                  {postData.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 size-4" />
                  {new Date(postData.publishedAt).toLocaleDateString('uk-UA')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-2 size-4" />
                  {postData.readTime}
                </div>
              </motion.div>

              {/* Заголовок */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl"
              >
                {postData.title}
              </motion.h1>

              {/* Опис */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 text-xl leading-relaxed text-gray-600"
              >
                {postData.excerpt}
              </motion.p>

              {/* Автор та соціальні мережі */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center">
                  <Image
                    src={postData.authorAvatar || '/placeholder.svg'}
                    alt={postData.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{postData.author}</div>
                    <div className="text-sm text-gray-500">{postData.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="mr-2 text-sm text-gray-500">Поділитися:</span>
                  <Button size="sm" variant="outline" className="bg-transparent p-2">
                    <Facebook className="size-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent p-2">
                    <Twitter className="size-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent p-2">
                    <Linkedin className="size-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent p-2">
                    <Share2 className="size-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Головне зображення */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto max-w-5xl"
            >
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={postData.featuredImage || '/placeholder.svg'}
                  alt={postData.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Контент статті */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="prose prose-lg prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />

              {/* Галерея */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12"
              >
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Фотогалерея</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {postData.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={image || '/placeholder.svg'}
                        alt={`Галерея ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Теги */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 border-t border-gray-200 pt-8"
              >
                <h4 className="mb-4 text-lg font-semibold text-gray-900">Теги:</h4>
                <div className="flex flex-wrap gap-2">
                  {postData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex cursor-pointer items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-green-100 hover:text-green-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Схожі статті */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Схожі статті</h2>
                <p className="text-gray-600">Читайте більше новин про наші досягнення</p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/post/${post.slug}`}>
                      <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image || '/placeholder.svg'}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-2 text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('uk-UA')}
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
