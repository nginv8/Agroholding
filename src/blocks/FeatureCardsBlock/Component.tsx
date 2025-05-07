import type React from 'react'
import * as motion from 'motion/react-client'
import type { FeatureCardsBlock as FeatureCardsProps } from '@/payload-types'
import { SectionTitle } from '@/components/SectionTitle'
import { IconRenderer } from '@/components/IconRenderer'
import { SectionBackground } from '@/components/SectionBackground'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const FeatureCardsBlock: React.FC<FeatureCardsProps> = ({
  title,
  background,
  theme,
  features,
}) => {
  return (
    <section className="relative py-20 overflow-hidden" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <motion.div
          className="flex justify-center gap-8 text-white flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features?.map((feature, index) => (
            <>
              <motion.div
                key={index + 'a'}
                variants={itemVariants}
                className="text-center flex-shrink-[1] flex-grow-[1] max-w-[31%] w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary-800 p-6 rounded-lg h-full"
                >
                  <div className="inline-block p-3 bg-primary-700 rounded-full mb-4">
                    {feature.icon && (
                      <IconRenderer name={feature.icon} className="size-8 text-accent-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-stone-300">{feature.description}</p>
                </motion.div>
              </motion.div>
              <motion.div
                key={index + 'd'}
                variants={itemVariants}
                className="text-center flex-shrink-[1] flex-grow-[1] max-w-[31%] w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary-800 p-6 rounded-lg h-full"
                >
                  <div className="inline-block p-3 bg-primary-700 rounded-full mb-4">
                    {feature.icon && (
                      <IconRenderer name={feature.icon} className="size-8 text-accent-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-stone-300">{feature.description}</p>
                </motion.div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
