import * as motion from 'motion/react-client';

interface TitleProps {
  title?: string | null;
  accentPart?: string | null;
  subtitle?: string | null;
  description?: string | null;
  variant?: 'colorAccent' | 'weightAccent' | null;
  alignment?: 'left' | 'center' | 'right' | null;
  className?: string | null;
  theme?: 'dark' | 'light' | null;
}

const textAlignmentClasses = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};
const decorAlignmentClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};
const getTitleParts = (title?: string, accentText?: string) => {
  if (!title || !accentText) {
    return { beforeText: title || '', accentText: accentText || '', afterText: '' };
  }

  const titleParts = title.split(accentText);
  const beforeText = titleParts[0];
  const afterText = titleParts[1] || '';

  return { beforeText, accentText, afterText };
};

export function SectionTitle({
  title,
  accentPart,
  subtitle,
  description,
  variant = 'colorAccent',
  theme = 'light',
  alignment = 'left',
  className = '',
}: TitleProps) {
  if (!title) return null;
  const { beforeText, accentText, afterText } = getTitleParts(title, accentPart || '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative mb-16 max-w-2xl ${textAlignmentClasses[alignment || 'left']} ${className}`}
    >
      {variant === 'weightAccent' ? (
        <>
          <h2
            className={`mb-4 text-3xl font-light capitalize leading-tight md:text-4xl lg:text-5xl ${theme === 'light' ? 'text-secondary-800' : 'text-white'}`}
          >
            {beforeText} {accentText && <span className="font-semibold">{accentText}</span>}
            {afterText}
          </h2>
          <div
            className={`mb-5 flex after:block after:h-1 after:w-32 after:bg-accent-500 ${decorAlignmentClasses[alignment || 'left']}`}
          />
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-lg font-light leading-relaxed md:text-xl ${theme === 'light' ? 'text-secondary-600' : 'text-secondary-200'}`}
            >
              {description}
            </motion.p>
          )}
        </>
      ) : (
        <>
          {subtitle && (
            <span
              className={`mb-6 inline-block text-sm font-medium uppercase tracking-wider ${theme === 'light' ? 'text-accent-600' : 'text-accent-400'}`}
            >
              {subtitle}
            </span>
          )}
          <h2
            className={`mb-8 text-4xl font-bold leading-tight lg:text-5xl ${theme === 'light' ? 'text-secondary-900' : 'text-white'}`}
          >
            {beforeText}
            {accentText && (
              <span
                className={`inline ${theme === 'light' ? '!text-primary-700' : '!text-accent-400'}`}
              >
                {accentText}
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
              className={`mb-12 text-xl leading-relaxed ${theme === 'light' ? 'text-secondary-600' : 'text-secondary-100'}`}
            >
              {description}
            </motion.p>
          )}
        </>
      )}
    </motion.div>
  );
}
