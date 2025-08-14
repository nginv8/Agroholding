import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import type { Page } from '@/payload-types';

type HeroBlock = NonNullable<Page['hero']>[number];

export const Hero2: React.FC<HeroBlock> = ({
  layout,
  title,
  backgroundImage,
  sideImage,
  // imageSide,
  links,
  stats,
}) => {
  return layout === 'hero2' ? (
    <section data-theme="dark" className="relative flex min-h-full flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && typeof backgroundImage === 'object' && (
          <Image
            src={backgroundImage.url || ''}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 before:absolute before:left-0 before:top-0 before:z-10 before:h-32 before:w-full before:bg-gradient-to-b before:from-black/40 before:to-transparent after:absolute after:bottom-0 after:left-0 after:z-10 after:h-32 after:w-full after:bg-gradient-to-t after:from-black/40 after:to-transparent" />
      </div>

      {/* Main content */}
      <div className="container relative z-20 mx-auto grid grow items-center gap-12 px-4 py-8 lg:grid-cols-2 lg:py-16">
        {/* Content column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-white"
        >
          {title?.subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-accent-400"
            >
              {title.subtitle}
            </motion.span>
          )}

          {title?.title && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-8 text-5xl font-bold leading-tight lg:text-7xl"
            >
              {title.title}
            </motion.h1>
          )}

          {title?.description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mb-12 text-xl leading-relaxed text-secondary-200"
            >
              {title.description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap gap-4 empty:hidden"
          >
            {links &&
              links.map((linkItem, index) => (
                <CMSLink key={index} {...linkItem.link} className="group" size="lg">
                  {linkItem.link.appearance === 'default' && (
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  )}
                </CMSLink>
              ))}
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {sideImage && typeof sideImage === 'object' && (
            <Image
              src={sideImage.url || ''}
              alt={sideImage.alt || ''}
              width={480}
              height={480}
              className="mx-auto h-auto max-w-[480px] rounded-2xl"
            />
          )}
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -left-8 size-64 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute -right-8 -top-8 size-64 rounded-full bg-primary-500/10 blur-3xl" />
        </motion.div>
      </div>

      {/* Stats section */}
      {stats && stats.length > 0 && (
        <div className="z-20 w-full bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                  className="text-center text-foreground"
                >
                  <div className="mb-2 text-3xl font-bold text-accent-400">{stat.number}</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  ) : null;
};
