import * as motion from 'motion/react-client'
import { Check } from 'lucide-react'
import type { AboutUsBlock as AboutUsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const AboutUsBlock: React.FC<AboutUsBlockProps> = (props) => {
  const {
    subtitle,
    title,
    titleSecondColor,
    description,
    mainImage,
    secondaryImage,
    features,
    links,
    stats,
  } = props

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column with images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              {mainImage && <Media resource={mainImage} imgClassName="rounded-2xl shadow-2xl" />}
            </div>

            {/* Floating image */}
            <div className="absolute -bottom-12 -right-12 z-20 w-64 h-64">
              <motion.div>
                {secondaryImage && (
                  <Media resource={secondaryImage} imgClassName="rounded-2xl shadow-xl" />
                )}
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right column with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
              {subtitle}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {title}
              <span className="block text-green-700">{titleSecondColor}</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">{description}</p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features.map((item, index) => (
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
              {(links || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" {...link} />
              })}
            </div>

            {/* <Button size="lg" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl" />
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
