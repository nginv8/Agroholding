import { FC } from 'react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { AboutBlock as AboutBlockProps } from '@/payload-types';

import { ParallaxPreview } from './ParallaxPreview';

export const AboutBlock: FC<AboutBlockProps> = ({
  title,
  sbg,
  theme,
  richText,
  mainImage,
  secondaryImage,
  cta,
}) => {
  return (
    <section className="content-section" data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="content-container grid items-center gap-16 lg:grid-cols-2">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <SectionTitle {...title} title={title?.title || ''} />
          <div className="space-y-8 overflow-hidden">
            {richText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {richText && <RichText data={richText} enableGutter={false} />}
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              {(cta || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" className="w-full sm:w-auto" {...link} />;
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Image column */}
        <ParallaxPreview mainMedia={mainImage} floatingMedia={secondaryImage} />
      </div>
    </section>
  );
};
