import type React from 'react';
import * as motion from 'motion/react-client';

import { FormBlock, FormBlockType } from '@/blocks/Form/Component';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { ContactUsBlock as ContactUsBlockProps } from '@/payload-types';

import ContactInfo from './ContactInfo';

type ContactUsBlockType = Omit<ContactUsBlockProps, 'blocks'> & {
  blocks?: FormBlockType[] | [];
};

export const ContactUsBlock: React.FC<ContactUsBlockType> = async (props) => {
  const { title, sbg, theme, blocks, corporate, contactDisplay } = props;

  const contactData = await getCachedGlobal('contactInfo', 1)();

  return (
    <section className="relative py-32" data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle {...title} title={title?.title || ''} />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {blocks &&
                Array.isArray(blocks) &&
                blocks.map((block, index) => {
                  switch (block.blockType) {
                    case 'formBlock':
                      return <FormBlock key={index} {...block} />;
                    default:
                      return null;
                  }
                })}
            </motion.div>
          </div>

          {/* Right column with information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ContactInfo contactData={contactData} displayOptions={contactDisplay} />

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <div className="relative h-[300px] overflow-hidden rounded-2xl">
                {/* Map placeholder - would be replaced with actual map component */}
                <div className="absolute inset-0 bg-gray-800">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="flex size-6 items-center justify-center rounded-full bg-yellow-400">
                        <div className="size-3 rounded-full bg-white" />
                      </div>
                      {/* Pulsing effect */}
                      <div className="absolute left-0 top-0 size-6 animate-ping rounded-full bg-yellow-400 opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Corporate info */}
            {corporate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm dark:border-white/20 dark:bg-white/5"
              >
                <h3 className="mb-4 text-xl font-semibold text-foreground">{corporate.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{corporate.description}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
