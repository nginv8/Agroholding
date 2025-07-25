'use client';

import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { Media } from '@/components/Media';
import type { Media as MediaType } from '@/payload-types';

type ParallaxPreviewProps = {
  mainMedia?: MediaType | number | null;
  floatingMedia?: MediaType | number | null;
};

export const ParallaxPreview: FC<ParallaxPreviewProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative z-10">
        {props.mainMedia && (
          <Media resource={props.mainMedia} imgClassName="rounded-2xl shadow-2xl" />
        )}
      </div>

      {/* Floating image */}
      <div className="absolute -bottom-12 -right-12 z-20 size-1/2">
        <motion.div style={{ y: y1 }}>
          {props.floatingMedia && (
            <Media resource={props.floatingMedia} imgClassName="rounded-2xl shadow-xl" />
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-12 -top-12 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute -bottom-12 -right-12 size-64 rounded-full bg-green-500/10 blur-3xl" />
    </motion.div>
  );
};
