import type React from 'react';
import * as motion from 'motion/react-client';

import { IconRenderer } from '@/components/IconRenderer';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { FeatureGridBlock as FeatureGridBlockProps } from '@/payload-types';

export const FeatureGridBlock: React.FC<FeatureGridBlockProps> = ({
  title,
  sbg,
  theme,
  advantages = [],
}) => {
  return (
    <section className="relative py-32" data-theme={theme}>
      <SectionBackground {...sbg} theme={theme} />

      <div className="container mx-auto px-4">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
              className="group z-10 flex cursor-pointer items-start"
            >
              <div className="relative mr-6">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary-50 transition-colors group-hover:bg-primary-100 dark:bg-primary-800 dark:group-hover:bg-primary-700">
                  <motion.div
                    animate={{ rotate: 0 }}
                    className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
                  >
                    {advantage?.icon && (
                      <IconRenderer
                        name={advantage.icon}
                        size={24}
                        className="text-primary-600 dark:text-accent-400 dark:group-hover:text-accent-300"
                      />
                    )}
                  </motion.div>
                </div>
                {/* Decorative element */}
                <div className="absolute -inset-4 -z-10 rounded-[30px] bg-primary-50/50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary-800/50" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-white">
                  {advantage.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
