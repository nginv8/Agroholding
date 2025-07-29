import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { IconRenderer } from '@/components/IconRenderer';
import { CMSLink } from '@/components/Link';
import { Media } from '@/components/Media';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { FeatureGalleryBlock as FeatureGalleryProps } from '@/payload-types';

export const FeatureGalleryBlock: React.FC<FeatureGalleryProps> = ({
  title,
  sbg,
  theme,
  features = [],
  stats = [],
}) => {
  return (
    <section className="relative overflow-hidden py-32" data-theme={theme}>
      <SectionBackground {...sbg} theme={theme} />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <SectionTitle {...title} title={title?.title || ''} theme={theme} />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
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
                <div className="relative mb-8 h-[300px] overflow-hidden rounded-2xl">
                  <Media
                    resource={feature.image}
                    className="size-full"
                    imgClassName="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent" />

                  {/* Icon & title */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    {feature?.icon && (
                      <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                        <IconRenderer name={feature.icon} size={24} className="text-accent-400" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>

                <div className="relative">
                  {feature.description && (
                    <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  )}
                  {feature.link.type && (
                    <CMSLink
                      {...feature.link}
                      className="group/btn inline-flex items-center text-primary-700 transition-colors hover:text-primary-600 dark:text-accent-400 dark:hover:text-accent-300"
                    >
                      <ChevronRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
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
            className="mt-24 rounded-2xl bg-primary-900/5 p-8 backdrop-blur-sm dark:bg-white/5"
          >
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary dark:text-accent">
                    {stat.number}
                  </div>
                  <div className="mb-2 font-medium text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
