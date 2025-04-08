import type React from 'react'
import * as motion from 'motion/react-client'
import type { FeatureCardsBlock as FeatureCardsProps } from '@/payload-types'
import { SectionTitle } from '@/components/SectionTitle'
import { IconRenderer } from '@/components/IconRenderer'
import { SectionBackground } from '@/components/SectionBackground'

export const FeatureCardsBlock: React.FC<FeatureCardsProps> = ({
  title,
  background,
  theme,
  features,
}) => {
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

  return (
    <section
      className="relative py-20 bg-green-900/90 text-white overflow-hidden"
      data-theme={theme}
    >
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features?.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-green-800 p-6 rounded-lg h-full"
              >
                <div className="inline-block p-3 bg-green-700 rounded-full mb-4">
                  {feature.icon && (
                    <IconRenderer name={feature.icon} className="size-8 text-yellow-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
