import { FC } from 'react'
import * as motion from 'motion/react-client'
import { SectionTitle } from '@/components/SectionTitle'
import { CMSLink } from '@/components/Link'

import type { AboutBlock as AboutBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { ParallaxPreview } from '@/components/ParallaxPreviewV1'
import { SectionBackground } from '@/components/SectionBackground'

export const AboutBlock: FC<AboutBlockProps> = ({
  title,
  background,
  theme,
  richText,
  mainImage,
  secondaryImage,
  cta,
}) => {
  return (
    <section className="py-32 relative overflow-hidden" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

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
              <SectionTitle {...title} title={title?.title || ''} theme={theme} />
              <div className="space-y-8">
                {richText && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
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
                  {(cta || []).map(({ link }, i) => {
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
