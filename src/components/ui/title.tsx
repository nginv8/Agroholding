import * as motion from 'motion/react-client';

import { getTitleParts } from '@/utilities/titleHelpers';

interface TitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: 'dark' | 'light';
}

export function Title({
  title,
  subtitle,
  style = 'dark',
  align = 'left',
  className = '',
}: TitleProps) {
  const { parts } = getTitleParts(title);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative mb-16 max-w-2xl ${textAlignmentClasses[align]} ${className}`}
    >
      <h2
        className={`mb-4 text-3xl font-light capitalize leading-tight md:text-4xl lg:text-5xl ${style === 'dark' ? 'text-gray-800' : 'text-white'}`}
      >
        {parts.map((part, index) =>
          part.isAccent ? (
            <span key={index} className="font-semibold">
              {part.text}
            </span>
          ) : (
            <span key={index}>{part.text}</span>
          )
        )}
      </h2>
      <div
        className={`mb-5 flex after:block after:h-1 after:w-32 after:bg-yellow-500 ${decorAlignmentClasses[align]}`}
      ></div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg font-light leading-relaxed md:text-xl ${style === 'dark' ? 'text-gray-600' : 'text-gray-300'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
