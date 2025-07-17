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

import type { FeatureTabsBlock as FeatureTabsProps } from '@/payload-types';
import { cn } from '@/utilities/ui';

export const FeatureTabsBlock: React.FC<FeatureTabsProps> = ({
  title,
  background,
  theme,
  features,
  cta,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden py-16 md:py-24" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container relative mx-auto px-4">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <ul className="sticky top-24 space-y-2">
              {features?.map((feature, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      'flex w-full items-center rounded-lg p-4 text-left text-muted-foreground transition-all duration-300 hover:bg-secondary/40 dark:hover:bg-primary/20',
                      {
                        'bg-secondary/40 font-medium text-foreground shadow-sm dark:bg-primary/20':
                          activeTab === index,
                      }
                    )}
                  >
                    {feature.icon && (
                      <IconRenderer
                        name={feature.icon}
                        className={cn('mr-3 h-5 w-5 text-muted-foreground', {
                          'text-primary dark:text-accent': activeTab === index,
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
                className="rounded-lg bg-secondary/30 p-8 shadow-lg dark:bg-primary/20 dark:bg-white"
              >
                <div className="mb-3 flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    {features[activeTab].icon && (
                      <IconRenderer
                        name={features[activeTab].icon}
                        className="h-6 w-6 text-primary dark:text-accent-400"
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {features[activeTab].title}
                  </h3>
                </div>

                <p className="mb-8 text-lg text-foreground">{features[activeTab].description}</p>

                {features[activeTab].content && (
                  <div className="prose-primary prose max-w-none">
                    {features[activeTab].content && (
                      <RichText data={features[activeTab].content} enableGutter={false} />
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {cta?.map(({ link }, i) => (
              <div key={i} className="mt-16">
                <CMSLink {...link} size="lg" className="group">
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CMSLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
