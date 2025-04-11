import * as motion from 'motion/react-client'
import { ChevronRight } from 'lucide-react'
import { IconRenderer } from '@/components/IconRenderer'
import type { FeatureGalleryBlock as FeatureGalleryProps } from '@/payload-types'
import { SectionTitle } from '@/components/SectionTitle'
import { Media } from '@/components/Media'
import { SectionBackground } from '@/components/SectionBackground'
import { CMSLink } from '@/components/Link'

export const FeatureGalleryBlock: React.FC<FeatureGalleryProps> = ({
  title,
  background,
  theme,
  features = [],
  stats = [],
}) => {
  return (
    <section className="relative py-32 overflow-hidden" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <SectionTitle {...title} title={title?.title || ''} theme={theme} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="relative h-[300px] mb-8 overflow-hidden rounded-2xl">
                  <Media
                    resource={feature.image}
                    className="size-full"
                    imgClassName="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent" />

                  {/* Icon & title */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    {feature?.icon && (
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                        <IconRenderer name={feature.icon} size={24} className="text-accent-400" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>

                <div className="relative">
                  {feature.description && (
                    <p
                      className={`text-lg leading-relaxed mb-4 ${theme === 'dark' ? 'text-secondary-300' : 'text-secondary-600'}`}
                    >
                      {feature.description}
                    </p>
                  )}
                  {feature.link.type && (
                    <CMSLink
                      {...feature.link}
                      className={`inline-flex items-center  transition-colors group/btn ${theme === 'dark' ? 'text-accent-400 hover:text-accent-300' : 'text-primary-700 hover:text-primary-600'}`}
                    >
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </CMSLink>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`mt-24 p-8 rounded-2xl backdrop-blur-sm ${theme === 'dark' ? 'bg-white/5' : 'bg-primary-900/5'}`}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-3xl font-bold  mb-2 ${theme === 'dark' ? 'text-accent-400' : 'text-primary-600'}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={` font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-secondary-900'}`}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={` text-sm ${theme === 'dark' ? 'text-secondary-400' : 'text-secondary-500'}`}
                  >
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
