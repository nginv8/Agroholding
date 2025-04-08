import * as motion from 'motion/react-client'
interface TitleProps {
  title: string
  accentPart?: string | null
  subtitle?: string | null
  description?: string | null
  variant?: 'colorAccent' | 'weightAccent' | null
  alignment?: 'left' | 'center' | 'right' | null
  className?: string | null
  theme?: 'dark' | 'light' | null
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
  accentPart,
  subtitle = '',
  description = '',
  variant = 'colorAccent',
  theme = 'light',
  alignment = 'left',
  className = '',
}: TitleProps) {
  const { beforeText, accentText, afterText } = getTitleParts(title, accentPart || '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl relative mb-16 ${textAlignmentClasses[alignment || 'left']} ${className}`}
    >
      {' '}
      {variant === 'weightAccent' ? (
        <>
          {' '}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl leading-tight font-light mb-4 capitalize ${theme === 'light' ? 'text-secondary-800' : 'text-white'}`}
          >
            {' '}
            {beforeText} {accentText && <span className="font-semibold">{accentText}</span>}{' '}
            {afterText}{' '}
          </h2>
          <div
            className={`flex mb-5 after:w-32 after:block after:h-1 after:bg-accent-500 ${decorAlignmentClasses[alignment || 'left']}`}
          />{' '}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-lg md:text-xl leading-relaxed font-light ${theme === 'light' ? 'text-secondary-600' : 'text-secondary-200'}`}
            >
              {' '}
              {description}{' '}
            </motion.p>
          )}{' '}
        </>
      ) : (
        <>
          {' '}
          {subtitle && (
            <span
              className={`inline-block text-sm font-medium mb-6 tracking-wider uppercase ${theme === 'light' ? 'text-accent-600' : 'text-accent-400'}`}
            >
              {' '}
              {subtitle}{' '}
            </span>
          )}
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-8 leading-tight ${theme === 'light' ? 'text-secondary-900' : 'text-white'}`}
          >
            {beforeText}
            {accentText && (
              <span
                className={`inline ${theme === 'light' ? '!text-primary-700' : '!text-accent-400'}`}
              >
                {' '}
                {accentText}{' '}
              </span>
            )}
            {afterText}
          </h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-xl mb-12 leading-relaxed ${theme === 'light' ? 'text-secondary-600' : 'text-secondary-100'}`}
            >
              {description}
            </motion.p>
          )}
        </>
      )}
    </motion.div>
  )
}
