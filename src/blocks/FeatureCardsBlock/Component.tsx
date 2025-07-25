import type React from 'react';
import * as motion from 'motion/react-client';

import { IconRenderer } from '@/components/IconRenderer';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { FeatureCardsBlock as FeatureCardsProps } from '@/payload-types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const FeatureCardsBlock: React.FC<FeatureCardsProps> = ({
  title,
  background,
  theme,
  features,
}) => {
  return (
    <section className="relative overflow-hidden py-20" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container relative z-10 mx-auto px-4">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-white xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features?.map((feature, index) => (
            <motion.div
              key={index + 'a'}
              variants={itemVariants}
              className="w-full shrink grow text-center md:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-16px)] xl:max-w-[calc(25%-24px)]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-full rounded-lg bg-primary-800 p-6"
              >
                <div className="mb-4 inline-block rounded-full bg-primary-700 p-3">
                  {feature.icon && (
                    <IconRenderer name={feature.icon} className="size-8 text-accent-400" />
                  )}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-stone-300">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
