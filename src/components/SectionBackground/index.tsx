import { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

type SectionBackgroundProps = {
  className?: string
  theme?: 'dark' | 'light' | null
  backgroundMedia?: MediaType | number | null
  variant?: 'gradient' | 'image' | 'gradient and image' | 'color' | null
  gradientType?: 'bottom' | 'top' | 'top and bottom' | null
}

type getBgClassesArgs = {
  variant: SectionBackgroundProps['variant']
  gradientType: SectionBackgroundProps['gradientType']
  theme: SectionBackgroundProps['theme']
}

const getBgClasses = ({ variant, gradientType, theme }: getBgClassesArgs): string => {
  const colors = {
    light: {
      top: 'before:from-gray-100',
      bottom: 'after:from-gray-100',
      bg: 'bg-white',
    },
    dark: {
      top: 'before:from-green-950',
      bottom: 'after:from-green-950',
      bg: 'bg-green-900',
    },
  }

  if (!theme) theme = 'light'
  if (variant !== 'gradient' && variant !== 'gradient and image') return colors[theme].bg

  const classes = [colors[theme].bg]
  const top = `before:absolute before:inset-0 before:bg-gradient-to-b before:to-trasparent before:to-40% ${colors[theme].top}`
  const bottom = `after:absolute after:inset-0 after:bg-gradient-to-t after:to-trasparent after:to-40% ${colors[theme].bottom}`

  if (gradientType === 'top') classes.push(top)
  else if (gradientType === 'bottom') classes.push(bottom)
  else if (gradientType === 'top and bottom') classes.push(top, bottom)

  return cn(...classes)
}

export const SectionBackground = ({
  className = '',
  theme = 'light',
  backgroundMedia = null,
  variant = 'color',
  gradientType = 'top and bottom',
}: SectionBackgroundProps) => {
  const gradientClasses = getBgClasses({ variant, gradientType, theme })

  return (
    <div className={cn('absolute inset-0 z-0', gradientClasses, className)}>
      {backgroundMedia && (
        <Media
          resource={backgroundMedia}
          alt="Background image"
          fill
          className={cn(
            'absolute inset-0 opacity-20',
            theme === 'dark' ? 'mix-blend-multiply opacity-20' : 'saturate-30 opacity-5',
          )}
          imgClassName="size-full object-cover"
        />
      )}
    </div>
  )
}
