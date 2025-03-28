'use client'

import { Media } from '@/components/Media'
import { FC, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import type { AboutUsV2Block as AboutUsBlockProps } from '@/payload-types'

type ParallaxPreviewProps = {
  mainMedia?: AboutUsBlockProps['mainImage']
  floatingMedia?: AboutUsBlockProps['secondaryImage']
}

export const ParallaxPreview: FC<ParallaxPreviewProps> = (props) => {
  if (!props.mainMedia && !props.floatingMedia) return null
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])

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
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
    </motion.div>
  )
}
