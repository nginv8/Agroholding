import { FC } from 'react'
import * as motion from 'motion/react-client'
import { SectionTitle } from '@/components/ui/sectionTitle'
import { CMSLink } from '@/components/Link'

import type { AboutUsV1Block as AboutUsBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { ParallaxPreview } from '@/components/ParallaxPreviewV1'

export const AboutUsV1Block: FC<AboutUsBlockProps> = ({
  title,
  accentedPart,
  description,
  richText,
  mainImage,
  secondaryImage,
  links,
  style,
  align,
}) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <SectionTitle
                title={title || ''}
                accentPart={accentedPart || ''}
                align={align || 'left'}
                description={description || ''}
                variant="weightAccent"
                style={style || 'dark'}
              />
              <div className="space-y-8">
                {richText && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600"
                  >
                    {richText && <RichText data={richText} enableGutter={false} />}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-4"
                >
                  {(links || []).map(({ link }, i) => {
                    return <CMSLink key={i} size="lg" {...link} />
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Image column */}
            <ParallaxPreview mainMedia={mainImage} floatingMedia={secondaryImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
