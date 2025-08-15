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
    transition={{ delay: 0.5, duration: 1 }}
    className={cn(
      'flex flex-col justify-center gap-4 empty:hidden sm:flex-row sm:justify-stretch',
      alignment === 'center' && 'lg:justify-center',
      alignment === 'right' && 'lg:justify-end',
      (!alignment || alignment === 'left') && 'lg:justify-start'
    )}
  >
    {links.map((linkItem, index) => (
      <CMSLink
        key={index}
        {...linkItem.link}
        size="lg"
        className={cn(
          'group w-full sm:w-auto sm:flex-1 lg:flex-none',
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
