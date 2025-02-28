import * as motion from 'motion/react-client'
interface TitleProps {
  title: string
  boldPart: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  style?: 'dark' | 'light'
}

export function Title({
  title,
  boldPart,
  subtitle,
  style = 'dark',
  align = 'left',
  className = '',
}: TitleProps) {
  const titleParts = title.split(boldPart)
  const beforeText = titleParts[0]
  const afterText = titleParts[1] || ''

  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }
  const decorAlignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl relative mb-16 ${textAlignmentClasses[align]} ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl leading-tight font-light mb-4 capitalize ${style === 'dark' ? 'text-gray-800' : 'text-white'}`}
      >
        {beforeText}
        <span className="font-semibold">{boldPart}</span>
        {afterText}
      </h2>
      <div
        className={`flex mb-5 after:w-32 after:block after:h-1 after:bg-yellow-500 ${decorAlignmentClasses[align]}`}
      ></div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg md:text-xl leading-relaxed font-light ${style === 'dark' ? 'text-gray-600' : 'text-gray-300'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
