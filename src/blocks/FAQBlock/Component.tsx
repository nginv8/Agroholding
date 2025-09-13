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
import { cn } from '@/utilities/ui';
import type { FAQBlock as FAQProps } from '@/payload-types';

export const FAQBlock: React.FC<FAQProps> = ({
  title,
  sbg,
  theme,
  image,
  statistics,
  additionalInfoTitle,
  additionalInfo,
  faqs,
}) => {
  return (
    <section className="content-section" data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="content-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-24 order-2 lg:order-1"
          >
            <div className="relative h-[480px] overflow-hidden rounded-2xl md:h-[720px]">
              <Media resource={image} className="size-full" imgClassName="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 size-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute -left-8 -top-8 size-64 rounded-full bg-primary-500/10 blur-3xl" />

            {/* Statistics */}

            <div
              className={cn(
                'absolute inset-x-4 bottom-4 grid justify-items-center gap-4 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm md:inset-x-8 md:bottom-8 md:p-6',
                {
                  'grid-cols-1': statistics && statistics.length === 1,
                  'grid-cols-1 md:grid-cols-2': statistics && statistics.length === 2,
                }
              )}
            >
              {statistics?.map((statistic, index) => (
                <div key={statistic.id || index} className="text-center">
                  <div className="mb-1 text-3xl font-bold text-primary-700">{statistic.value}</div>
                  <div className="text-sm text-gray-600">{statistic.title}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <SectionTitle {...title} title={title?.title || ''} />

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
                    className="rounded border-none transition-colors data-[state=open]:bg-gray-100/80 dark:data-[state=open]:bg-gray-950/20"
                  >
                    <AccordionTrigger className="px-4 text-left hover:no-underline data-[state=open]:text-primary-700 md:px-6 dark:text-white dark:data-[state=open]:text-accent">
                      <span className="pr-2 text-base font-medium md:text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6">
                      <p className="leading-relaxed text-gray-600 md:text-base dark:text-gray-200">
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
                className="mt-8 rounded-xl border border-primary-100 bg-primary-50 p-6 dark:border-white/20 dark:bg-primary-950/50"
              >
                <p className="font-medium text-primary dark:text-accent">{additionalInfoTitle}</p>
                <p className="mt-2 text-primary-600 dark:text-muted-foreground">{additionalInfo}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
