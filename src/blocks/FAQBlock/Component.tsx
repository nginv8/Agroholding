import * as motion from 'motion/react-client';

import { Media } from '@/components/Media';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordionPlus';

import type { FAQBlock as FAQProps } from '@/payload-types';

export const FAQBlock: React.FC<FAQProps> = ({
  title,
  background,
  theme,
  image,
  statistics,
  additionalInfoTitle,
  additionalInfo,
  faqs,
}) => {
  return (
    <section className="relative overflow-hidden py-20" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-24 order-2 lg:order-1"
          >
            <div className="relative h-[720px] overflow-hidden rounded-2xl">
              <Media resource={image} className="size-full" imgClassName="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />

            {/* Statistics */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-2 gap-4 rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur-sm">
                {statistics?.map((statistic, index) => (
                  <div key={statistic.id || index} className="text-center">
                    <div className="mb-1 text-3xl font-bold text-primary-700">
                      {statistic.value}
                    </div>
                    <div className="text-sm text-gray-600">{statistic.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <SectionTitle {...title} title={title?.title || ''} theme={theme} />

            <Accordion type="single" collapsible className="space-y-4">
              {faqs?.map((faq, index) => (
                <motion.div
                  key={faq.id || index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded border-none transition-colors data-[state=open]:bg-gray-100/80 dark:data-[state=open]:bg-gray-950/50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline data-[state=open]:text-primary-700 dark:text-white dark:data-[state=open]:text-accent-400">
                      <span className="text-lg font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="leading-relaxed text-gray-600 dark:text-gray-200">
                        {faq?.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {additionalInfo && additionalInfoTitle && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 rounded-xl border border-primary-100 bg-primary-50 p-6 dark:border-accent-400/30 dark:bg-primary-950/50"
              >
                <p className="font-medium text-primary-800 dark:text-accent-100">
                  {additionalInfoTitle}
                </p>
                <p className="mt-2 text-primary-600 dark:text-white/80">{additionalInfo}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
