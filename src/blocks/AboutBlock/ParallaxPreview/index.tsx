'use client'

import { Media } from '@/components/Media'
import { FC, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import type { Media as MediaType } from '@/payload-types'

type ParallaxPreviewProps = {
  mainMedia?: MediaType | number | null
  floatingMedia?: MediaType | number | null
}

export const ParallaxPreview: FC<ParallaxPreviewProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <div ref={containerRef} className="relative h-[500px]">
      {/* Main elements */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ y: y1 }}
        className="absolute left-0 right-0 top-20 z-20 h-[400px] w-11/12 rounded-2xl overflow-hidden shadow-2xl"
      >
        <Media
          resource={props.mainMedia}
          className="size-full"
          imgClassName="size-full object-cover"
        />
      </motion.div>

      {/* Additional image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ y: y2, opacity }}
        className="absolute h-[300px] left-1/4 right-0 top-1/3 z-10 rounded-2xl overflow-hidden shadow-xl"
      >
        <Media
          resource={props.floatingMedia}
          className="size-full"
          imgClassName="size-full object-cover"
        />
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
    </div>
  )
}
