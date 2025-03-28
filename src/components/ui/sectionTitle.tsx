import * as motion from 'motion/react-client'
interface TitleProps {
  title: string
  accentPart?: string
  subtitle?: string
  description?: string
  variant?: 'colorAccent' | 'weightAccent'
  align?: 'left' | 'center' | 'right'
  className?: string
  style?: 'dark' | 'light'
}

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
const getTitleParts = (title: string, accentText?: string) => {
  if (!accentText) {
    return { beforeText: title, accentText: '', afterText: '' }
  }
  const titleParts = title.split(accentText)
  const beforeText = titleParts[0]
  const afterText = titleParts[1] || ''

  return { beforeText, accentText, afterText }
}

export function SectionTitle({
  title,
  accentPart = '',
  subtitle = '',
  description = '',
  variant = 'colorAccent',
  style = 'dark',
  align = 'left',
  className = '',
}: TitleProps) {
  const { beforeText, accentText, afterText } = getTitleParts(title, accentPart)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl relative mb-16 ${textAlignmentClasses[align]} ${className}`}
    >
      {variant === 'weightAccent' ? (
        <>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl leading-tight font-light mb-4 capitalize ${style === 'dark' ? 'text-gray-800' : 'text-white'}`}
          >
            {beforeText}
            {accentText && <span className="font-semibold">{accentText}</span>}
            {afterText}
          </h2>
          <div
            className={`flex mb-5 after:w-32 after:block after:h-1 after:bg-yellow-500 ${decorAlignmentClasses[align]}`}
          />
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-lg md:text-xl leading-relaxed font-light ${style === 'dark' ? 'text-gray-600' : 'text-gray-300'}`}
            >
              {description}
            </motion.p>
          )}
        </>
      ) : (
        <>
          {subtitle && (
            <span className="inline-block text-sm font-medium text-yellow-600 mb-6 tracking-wider uppercase">
              {subtitle}
            </span>
          )}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {beforeText}
            {accentText && <span className="inline text-green-700"> {accentText} </span>}
            {afterText}
          </h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </>
      )}
    </motion.div>
  )
}
