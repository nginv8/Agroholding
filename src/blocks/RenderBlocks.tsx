import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { AboutBlock } from '@/blocks/AboutBlock/Component'
import { AboutFeaturesBlock } from '@/blocks/AboutFeaturesBlock/Component'
import { FeatureCardsBlock } from '@/blocks/FeatureCardsBlock/Component'
import { FeatureTabsBlock } from '@/blocks/FeatureTabsBlock/Component'
import { FeatureGridBlock } from '@/blocks/FeatureGridBlock/Component'
import { FeatureGalleryBlock } from '@/blocks/FeatureGalleryBlock/Component'

import { TypedLocale } from 'payload'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  about: AboutBlock,
  aboutFeatures: AboutFeaturesBlock,
  featureCards: FeatureCardsBlock,
  featureTabs: FeatureTabsBlock,
  featureGrid: FeatureGridBlock,
  featureGallery: FeatureGalleryBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  locale: TypedLocale
}> = (props) => {
  const { blocks, locale } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} locale={locale} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
