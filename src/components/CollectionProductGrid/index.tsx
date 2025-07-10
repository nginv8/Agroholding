import React from 'react'

import { ProductCard, CardPostData } from '@/components/ProductCard'

export type Props = {
  posts: CardPostData[]
}

export const CollectionProductGrid: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className="container relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 md:gap-y-12">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div key={index}>
              <ProductCard
                className="h-full"
                doc={result}
                relationTo="posts"
                showCategories={false}
              />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
