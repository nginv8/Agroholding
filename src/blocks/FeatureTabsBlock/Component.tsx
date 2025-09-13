'use client';

import type React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { IconRenderer } from '@/components/IconRenderer';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { cn } from '@/utilities/ui';
import { isValidIconName } from '@/utilities/validateIcon';
import type { FeatureTabsBlock as FeatureTabsProps } from '@/payload-types';

export const FeatureTabsBlock: React.FC<FeatureTabsProps> = ({
  title,
  sbg,
  theme,
  features,
  cta,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="content-section" data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="content-container">
        <SectionTitle {...title} title={title?.title || ''} />

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <ul className="sticky top-24 space-y-2">
              {features?.map((feature, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      'flex w-full items-center rounded-lg p-4 text-left text-foreground/70 transition-all duration-300 hover:bg-slate-200/50 md:px-6 dark:hover:bg-primary/20',
                      {
                        'bg-slate-200/50 font-medium text-foreground dark:bg-primary/20':
                          activeTab === index,
                      }
                    )}
                  >
                    {feature.icon && isValidIconName(feature.icon) && (
                      <IconRenderer
                        name={feature.icon}
                        className={cn('mr-3 h-5 w-5 text-foreground/70', {
                          'text-primary-700 dark:text-accent': activeTab === index,
                        })}
                      />
                    )}
                    {feature.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3">
            {features && features[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border border-slate-200/80 bg-white p-8 shadow-lg dark:border-none dark:bg-primary/20"
              >
                <div className="mb-3 flex items-center">
                  {features[activeTab].icon && isValidIconName(features[activeTab].icon) && (
                    <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                      <IconRenderer
                        name={features[activeTab].icon}
                        className="size-6 text-primary dark:text-accent-400"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">
                    {features[activeTab].title}
                  </h3>
                </div>

                <p className="mb-8 text-lg text-foreground">{features[activeTab].description}</p>

                {features[activeTab].content && (
                  <div className="prose prose-green max-w-none">
                    {features[activeTab].content && (
                      <RichText data={features[activeTab].content} enableGutter={false} />
                    )}
                  </div>
                )}
              </motion.div>
            )}

            <div className="mt-16 flex flex-col gap-4 md:flex-row">
              {cta?.map(({ link }, i) => (
                <CMSLink key={i} {...link} size="lg" className="group w-full md:w-auto">
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </CMSLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
