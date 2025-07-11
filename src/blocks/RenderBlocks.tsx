import React, { Fragment } from 'react';
import { TypedLocale } from 'payload';

import { AboutBlock } from '@/blocks/AboutBlock/Component';
import { AboutFeaturesBlock } from '@/blocks/AboutFeaturesBlock/Component';
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component';
import { CallToActionTextBlock } from '@/blocks/CallToActionTextBlock/Component';
import { ContentBlock } from '@/blocks/ContentBlock/Component';
import { FAQBlock } from '@/blocks/FAQBlock/Component';
import { FeatureCardsBlock } from '@/blocks/FeatureCardsBlock/Component';
import { FeatureGalleryBlock } from '@/blocks/FeatureGalleryBlock/Component';
import { FeatureGridBlock } from '@/blocks/FeatureGridBlock/Component';
import { FeatureTabsBlock } from '@/blocks/FeatureTabsBlock/Component';
import { FormBlock } from '@/blocks/Form/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
import { ProductGridBlock } from '@/blocks/ProductGridBlock/Component';
import { TestimonialBlock } from '@/blocks/TestimonialBlock/Component';
import type { Page } from '@/payload-types';

// This is a mapping of block types (slugs) to their respective components
const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  ctaText: CallToActionTextBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  about: AboutBlock,
  aboutFeatures: AboutFeaturesBlock,
  featureCards: FeatureCardsBlock,
  featureTabs: FeatureTabsBlock,
  featureGrid: FeatureGridBlock,
  featureGallery: FeatureGalleryBlock,
  productGrid: ProductGridBlock,
  testimonial: TestimonialBlock,
  faq: FAQBlock,
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][];
  locale: TypedLocale;
}> = (props) => {
  const { blocks, locale } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} locale={locale} disableInnerContainer />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
