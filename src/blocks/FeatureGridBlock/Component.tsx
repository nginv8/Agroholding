import type React from 'react'
import * as motion from 'motion/react-client'
import { IconRenderer } from '@/components/IconRenderer'
import { SectionTitle } from '@/components/SectionTitle'

import type { FeatureGridBlock as FeatureGridBlockProps } from '@/payload-types'
import { SectionBackground } from '@/components/SectionBackground'

export const FeatureGridBlock: React.FC<FeatureGridBlockProps> = ({
  title,
  background,
  theme,
  advantages = [],
}) => {
  return (
    <section className="py-32 relative bg-white" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {advantages?.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="flex items-start group cursor-pointer z-10"
            >
              <div className="mr-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <motion.div
                    animate={{ rotate: 0 }}
                    className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
                  >
                    {advantage?.icon && (
                      <IconRenderer name={advantage.icon} size={24} className="text-green-600" />
                    )}
                  </motion.div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -inset-4 rounded-[30px] bg-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
