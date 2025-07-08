'use client'

import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import type React from 'react'
import { useTranslations } from 'next-intl'
import * as motion from 'motion/react-client'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const ProductCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
  index?: number
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps, index = 0 } = props
  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}
  const t = useTranslations()

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn('group block', className)}
      ref={card.ref}
    >
      <Link href={href} ref={link.ref} className="group block">
        <div className="relative aspect-square mb-6 overflow-hidden rounded-xl bg-muted">
          {!metaImage && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              No image
            </div>
          )}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              resource={metaImage}
              size="33vw"
              className="transition-transform duration-300 group-hover:scale-105 w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="space-y-3">
          {showCategories && hasCategories && (
            <div className="flex flex-wrap gap-2">
              {categories?.map((category, categoryIndex) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category
                  const categoryTitle = titleFromCategory || 'Untitled category'

                  return (
                    <span
                      key={categoryIndex}
                      className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {categoryTitle}
                    </span>
                  )
                }
                return null
              })}
            </div>
          )}

          {titleToUse && (
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors dark:group-hover:text-white">
              {titleToUse}
            </h3>
          )}

          {description && (
            <p className="text-muted-foreground dark:text-white/80 mb-4 line-clamp-2">
              {sanitizedDescription}
            </p>
          )}

          <span className="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors dark:text-accent-500 dark:group-hover:text-accent-400">
            {t('read-more')}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
