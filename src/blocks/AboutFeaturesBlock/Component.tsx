import * as motion from 'motion/react-client'
import { Check } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import { ParallaxPreview } from '@/components/ParallaxPreviewV2'

import type { AboutFeaturesBlock as AboutFeaturesProps } from '@/payload-types'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionBackground } from '@/components/SectionBackground'

export const AboutFeaturesBlock: React.FC<AboutFeaturesProps> = (props) => {
  const { title, background, theme, mainImage, secondaryImage, features, cta, stats } = props

  return (
    <section className="relative py-32 overflow-hidden" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column with images */}

          <ParallaxPreview mainMedia={mainImage} floatingMedia={secondaryImage} />

          {/* Right column with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <SectionTitle {...title} title={title?.title || ''} theme={theme} />

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {(cta || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" {...link} />
              })}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent rounded-2xl" />
              <div className="relative p-8 text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
