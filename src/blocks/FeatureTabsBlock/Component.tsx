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

  const isLight = theme === 'light'

  const accentColor = isLight ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-900 text-emerald-300'
  const cardBg = isLight ? 'bg-white' : 'bg-gray-800'
  const cardText = isLight ? 'text-gray-600' : 'text-gray-300'

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
                          ? `${accentColor} font-medium`
                          : `${isLight ? 'hover:bg-gray-100' : 'hover:bg-gray-800'}`
                      }`}
                    >
                      {feature.icon && (
                        <IconRenderer name={feature.icon} className="w-5 h-5 mr-3" />
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
                className={`${cardBg} rounded-lg shadow-lg p-8`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`mr-4 w-12 h-12 flex items-center justify-center rounded-full ${accentColor}`}
                  >
                    {features[activeTab].icon && (
                      <IconRenderer name={features[activeTab].icon} className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold">{features[activeTab].title}</h3>
                </div>
                <p className={`${cardText} text-lg mb-6`}>{features[activeTab].description}</p>
                {features[activeTab].content && (
                  <div
                    className={`${cardText} prose max-w-none ${isLight ? 'prose-emerald' : 'prose-invert'}`}
                  >
                    {features[activeTab].content && (
                      <RichText data={features[activeTab].content} enableGutter={false} />
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {cta?.map(({ link }, i) => (
          <div key={i} className="mt-16 text-center">
            <CMSLink
              {...link}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium ${
                isLight
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-emerald-500 text-gray-900 hover:bg-emerald-400'
              } transition-colors duration-300`}
            >
              {link.label}
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
    </section>
  )
}
