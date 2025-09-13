import { Check } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { cn } from '@/utilities/ui';
import type { AboutFeaturesBlock as AboutFeaturesProps } from '@/payload-types';

import { ParallaxPreview } from './ParallaxPreview';

export const AboutFeaturesBlock: React.FC<AboutFeaturesProps> = (props) => {
  const { title, sbg, theme, mainImage, secondaryImage, features, cta, stats } = props;

  return (
    <section className="content-section pb-0" data-theme={theme}>
      <SectionBackground {...sbg} />
      <div className="content-container">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Column with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:order-2"
          >
            <SectionTitle {...title} title={title?.title || ''} />

            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:mb-12 lg:gap-8">
              {features?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-white/10">
                      <Check className="size-4 text-primary-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {cta && cta.length && (
              <div className="flex flex-wrap items-center space-x-4">
                {cta?.map(({ link }, i) => {
                  return <CMSLink key={i} size="lg" {...link} className="w-full md:w-auto" />;
                })}
              </div>
            )}
          </motion.div>

          {/* Column with images */}
          <ParallaxPreview
            mainMedia={mainImage}
            floatingMedia={secondaryImage}
            className="lg:order-1"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 mt-8 w-full bg-black/5 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn('grid justify-items-center gap-4 lg:gap-8', {
              'mx-auto max-w-md grid-cols-1': stats && stats.length === 1,
              'mx-auto max-w-2xl grid-cols-1 md:grid-cols-2': stats && stats.length === 2,
              'grid-cols-1 md:grid-cols-3': stats && stats.length === 3,
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': stats && stats.length >= 4,
            })}
          >
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative w-full p-4 text-center lg:p-8"
              >
                <span className="mb-2 inline-block text-4xl font-bold text-primary dark:text-accent">
                  {stat.number}
                </span>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
