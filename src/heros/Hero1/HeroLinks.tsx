import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import { cn } from '@/utilities/ui';

import type { HeroLinksProps } from './types';

export const HeroLinks: React.FC<HeroLinksProps> = ({ links, alignment }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className={cn(
      'mt-8 flex max-w-4xl flex-col gap-4 empty:hidden sm:flex-row sm:justify-stretch',
      alignment === 'center' && 'md:justify-center',
      alignment === 'right' && 'md:justify-end',
      (!alignment || alignment === 'left') && 'md:justify-start'
    )}
  >
    {links.map((linkItem, index) => (
      <CMSLink
        key={index}
        {...linkItem.link}
        size="lg"
        className={cn(
          'group w-full sm:w-auto sm:flex-1 md:flex-none',
          linkItem.link.appearance === 'outline' && 'backdrop-blur-sm'
        )}
      >
        {linkItem.link.appearance === 'default' && (
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        )}
      </CMSLink>
    ))}
  </motion.div>
);
