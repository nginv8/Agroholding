import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import type { Page } from '@/payload-types';

type HeroBlock = NonNullable<Page['hero']>[number];

export const Hero1: React.FC<HeroBlock> = ({ layout, title, backgroundImage, links }) => {
  return layout === 'hero1' ? (
    <section className="relative flex min-h-full items-center" data-theme="dark">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 after:absolute after:inset-0 after:bg-black/50">
        {backgroundImage && typeof backgroundImage === 'object' && (
          <Image
            src={backgroundImage.url || ''}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-8 text-center text-white">
        {title?.subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block max-w-4xl rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
          >
            {title.subtitle}
          </motion.span>
        )}

        {title?.title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            {title.title}
            {title.title}
          </motion.h1>
        )}

        {title?.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
          >
            {title.description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex max-w-4xl flex-col items-center justify-center gap-4 empty:hidden sm:flex-row"
        >
          {links &&
            Array.isArray(links) &&
            links.map((linkItem, index) => (
              <CMSLink key={index} {...linkItem.link} className="group" size="lg">
                {linkItem.link.appearance === 'default' && (
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                )}
              </CMSLink>
            ))}
        </motion.div>
      </div>
    </section>
  ) : null;
};
