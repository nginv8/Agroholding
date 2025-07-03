'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'
import type { FeatureTabsBlock as FeatureTabsProps } from '@/payload-types'
import { SectionTitle } from '@/components/SectionTitle'
import { IconRenderer } from '@/components/IconRenderer'
import { CMSLink } from '@/components/Link'
import { SectionBackground } from '@/components/SectionBackground'
import RichText from '@/components/RichText'

export const FeatureTabsBlock: React.FC<FeatureTabsProps> = ({
  title,
  background,
  theme,
  features,
  cta,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const isDark = theme === 'dark'

  const activeTabButtonAccentColor = isDark
    ? 'bg-primary-800/80 text-accent-foreground'
    : 'bg-primary/10 text-primary'

  const inactiveTabButton = isDark
    ? 'text-white/80 hover:bg-primary-800/40'
    : 'text-muted-foreground hover:bg-muted/50'

  const activeTabIcon = isDark ? 'text-accent-400' : 'text-primary'

  const inactiveTabIcon = isDark ? 'text-white/80' : 'text-muted-foreground'

  const cardBackground = isDark ? 'bg-primary-800/80' : 'bg-white'

  const cardIconBackground = isDark ? 'bg-white/10' : 'bg-primary/10'

  const cardText = isDark ? 'text-white/90' : 'text-muted-foreground'

  const cardTitle = isDark ? 'text-foreground' : 'text-foreground'

  const cardIcon = isDark ? 'text-accent-400' : 'text-primary'

  return (
    <section className="py-16 md:py-24 overflow-hidden relative" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container mx-auto px-4 relative">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <ul className="space-y-2">
                {features?.map((feature, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                        activeTab === index
                          ? `${activeTabButtonAccentColor} font-medium shadow-sm`
                          : inactiveTabButton
                      }`}
                    >
                      {feature.icon && (
                        <IconRenderer
                          name={feature.icon}
                          className={`w-5 h-5 mr-3 ${activeTab === index ? activeTabIcon : inactiveTabIcon}`}
                        />
                      )}
                      {feature.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3">
            {features && features[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${cardBackground} rounded-lg shadow-lg p-8`}
              >
                <div className="flex items-center mb-3">
                  <div
                    className={`mr-4 w-12 h-12 flex items-center rounded-full justify-center ${cardIconBackground}`}
                  >
                    {features[activeTab].icon && (
                      <IconRenderer
                        name={features[activeTab].icon}
                        className={`w-6 h-6 ${cardIcon}`}
                      />
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold ${cardTitle}`}>{features[activeTab].title}</h3>
                </div>

                <p className={`${cardText} text-lg mb-8`}>{features[activeTab].description}</p>

                {features[activeTab].content && (
                  <div className="prose max-w-none prose-primary">
                    {features[activeTab].content && (
                      <RichText data={features[activeTab].content} enableGutter={false} />
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {cta?.map(({ link }, i) => (
              <div key={i} className="mt-16">
                <CMSLink
                  {...link}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isDark
                      ? 'bg-accent-400 text-black hover:bg-accent-500 shadow-sm hover:shadow-md'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg'
                  }`}
                >
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </CMSLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
