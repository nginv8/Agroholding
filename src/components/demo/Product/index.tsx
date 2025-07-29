import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  BarChart3,
  Check,
  Download,
  Leaf,
  Mail,
  Package,
  Phone,
  Shield,
  Star,
  Truck,
} from 'lucide-react';
import * as motion from 'motion/react-client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Демо дані для продукта
const productData = {
  name: 'Преміум кукурудза для попкорну',
  shortDescription:
    'Найкраща кукурудза для попкорну преміум якості з високим коефіцієнтом розкриття зерен',
  fullDescription:
    'Наша преміум кукурудза для попкорну - це результат багаторічної селекційної роботи та використання найсучасніших агротехнологій. Спеціально відібрані сорти забезпечують високий коефіцієнт розкриття, однорідний розмір зерен та відмінні смакові якості.',
  category: 'Кукурудза',
  rating: 5,
  reviewsCount: 47,
  price: 'Ціна за запитом',
  availability: 'В наявності',
  sku: 'CORN-PREMIUM-001',
  images: [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
  ],
  features: [
    'Високий коефіцієнт розкриття (98%+)',
    'Однорідний розмір зерен',
    'Відмінні смакові якості',
    'Довгий термін зберігання',
    'Сертифікована якість',
    'Екологічно чиста продукція',
  ],
  specifications: {
    Вологість: '14-16%',
    'Коефіцієнт розкриття': '98%+',
    'Розмір зерна': '6-8 мм',
    'Термін зберігання': '24 місяці',
    Упаковка: '25 кг, 50 кг мішки',
    Походження: 'Україна',
  },
  benefits: [
    {
      icon: Award,
      title: 'Преміум якість',
      description: 'Найвищі стандарти якості та контролю',
    },
    {
      icon: Leaf,
      title: 'Екологічно чисто',
      description: 'Вирощено без шкідливих хімікатів',
    },
    {
      icon: BarChart3,
      title: 'Високий вихід',
      description: 'Максимальний коефіцієнт розкриття',
    },
    {
      icon: Shield,
      title: 'Сертифіковано',
      description: 'Відповідає міжнародним стандартам',
    },
  ],
  applications: [
    'Виробництво попкорну для кінотеатрів',
    'Домашнє приготування попкорну',
    'Промислове виробництво снеків',
    'Ресторанний бізнес',
    'Експорт',
  ],
  documents: [
    { name: 'Сертифікат якості', type: 'PDF', size: '2.1 MB' },
    { name: 'Технічні характеристики', type: 'PDF', size: '1.8 MB' },
    { name: 'Інструкція по зберіганню', type: 'PDF', size: '1.2 MB' },
  ],
};

const relatedProducts = [
  {
    name: 'Органічна пшениця',
    image: '/placeholder.svg?height=300&width=300',
    price: 'Ціна за запитом',
    rating: 5,
    slug: 'organic-wheat',
  },
  {
    name: 'Насіння соняшника',
    image: '/placeholder.svg?height=300&width=300',
    price: 'Ціна за запитом',
    rating: 4,
    slug: 'sunflower-seeds',
  },
  {
    name: 'Соя харчова',
    image: '/placeholder.svg?height=300&width=300',
    price: 'Ціна за запитом',
    rating: 5,
    slug: 'food-soy',
  },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        {/* Навігація */}
        <section className="bg-gray-50 py-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center text-green-600 transition-colors hover:text-green-700"
              >
                <ArrowLeft className="mr-2 size-4" />
                Повернутися до продукції
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Основна інформація про продукт */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
              {/* Галерея зображень */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={productData.images[0] || '/placeholder.svg'}
                    alt={productData.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {productData.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-opacity hover:opacity-80"
                    >
                      <Image
                        src={image || '/placeholder.svg'}
                        alt={`${productData.name} ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Інформація про продукт */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {productData.category}
                  </Badge>
                  <h1 className="mb-4 text-4xl font-bold text-gray-900">{productData.name}</h1>

                  <div className="mb-6 flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(productData.rating)].map((_, i) => (
                        <Star key={i} className="size-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600">({productData.reviewsCount} відгуків)</span>
                  </div>

                  <p className="mb-6 text-xl leading-relaxed text-gray-600">
                    {productData.shortDescription}
                  </p>

                  <div className="mb-8 flex items-center space-x-6">
                    <div>
                      <span className="text-3xl font-bold text-green-600">{productData.price}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Package className="mr-2 size-5" />
                      <span className="font-medium">{productData.availability}</span>
                    </div>
                  </div>

                  <div className="mb-8 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ключові переваги:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {productData.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="mr-3 size-5 shrink-0 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="flex-1">
                      <Phone className="mr-2 size-5" />
                      Зателефонувати
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                      <Mail className="mr-2 size-5" />
                      Написати email
                    </Button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Артикул:</span> {productData.sku}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Переваги продукту */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Чому обирають нашу продукцію
                </h2>
                <p className="text-gray-600">Переваги, які роблять нас лідерами галузі</p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {productData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-green-100">
                      <benefit.icon className="size-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Детальна інформація */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Опис</TabsTrigger>
                  <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                  <TabsTrigger value="applications">Застосування</TabsTrigger>
                  <TabsTrigger value="documents">Документи</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-gray-700">
                      {productData.fullDescription}
                    </p>

                    <h3 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
                      Процес виробництва
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Наша кукурудза вирощується на найкращих землях України з використанням
                      сучасних агротехнологій. Ми контролюємо весь процес від посіву до збирання
                      врожаю, забезпечуючи найвищу якість продукції.
                    </p>

                    <h3 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
                      Контроль якості
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      Кожна партія продукції проходить ретельний контроль якості в нашій
                      сертифікованій лабораторії. Ми гарантуємо відповідність всім міжнародним
                      стандартам та вимогам безпеки харчових продуктів.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        Технічні характеристики
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(productData.specifications).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between border-b border-gray-200 py-2"
                          >
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        Додаткова інформація
                      </h3>
                      <div className="rounded-lg bg-green-50 p-6">
                        <div className="flex items-start space-x-3">
                          <Truck className="mt-1 size-6 text-green-600" />
                          <div>
                            <h4 className="mb-2 font-medium text-gray-900">Доставка</h4>
                            <p className="text-sm text-gray-600">
                              Безкоштовна доставка по Україні при замовленні від 1 тонни. Можлива
                              доставка власним транспортом.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="applications" className="mt-8">
                  <div>
                    <h3 className="mb-6 text-xl font-semibold text-gray-900">Сфери застосування</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {productData.applications.map((application, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4"
                        >
                          <div className="size-2 rounded-full bg-green-600"></div>
                          <span className="text-gray-700">{application}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-lg bg-blue-50 p-6">
                      <h4 className="mb-2 font-semibold text-gray-900">Потрібна консультація?</h4>
                      <p className="mb-4 text-gray-600">
                        Наші експерти допоможуть вам обрати найкращий варіант для вашого бізнесу
                      </p>
                      <Button>Отримати консультацію</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="mt-8">
                  <div>
                    <h3 className="mb-6 text-xl font-semibold text-gray-900">Документація</h3>
                    <div className="space-y-4">
                      {productData.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-red-100">
                              <span className="text-xs font-semibold text-red-600">{doc.type}</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{doc.name}</div>
                              <div className="text-sm text-gray-500">{doc.size}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 size-4" />
                            Завантажити
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Схожі продукти */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Схожі продукти</h2>
                <p className="text-gray-600">Інші продукти, які можуть вас зацікавити</p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/product/${product.slug}`}>
                      <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={product.image || '/placeholder.svg'}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-2 flex items-center">
                            {[...Array(product.rating)].map((_, i) => (
                              <Star key={i} className="size-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                            {product.name}
                          </h3>
                          <p className="font-semibold text-green-600">{product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
