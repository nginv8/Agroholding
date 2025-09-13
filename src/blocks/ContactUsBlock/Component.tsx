import { TypedLocale } from 'payload';

import type React from 'react';
import * as motion from 'motion/react-client';
import { getLocale } from 'next-intl/server';

import { FormBlock, FormBlockType } from '@/blocks/Form/Component';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type {
  ContactInfo as ContactInfoType,
  ContactUsBlock as ContactUsBlockType,
} from '@/payload-types';

import ContactInfo from './ContactInfo';
import { MapWithSkeleton } from './MapWithSkeleton';

type ContactUsBlock = Omit<ContactUsBlockType, 'blocks'> & {
  blocks?: FormBlockType[] | [];
};

export const ContactUsBlock: React.FC<ContactUsBlock> = async (props) => {
  const { title, sbg, theme, blocks, corporate, contactDisplay } = props;
  const locale = (await getLocale()) as TypedLocale;

  const contactData = (await getCachedGlobal('contactInfo', 1, locale)()) as ContactInfoType;

  return (
    <section className="content-section" data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="content-container grid items-start gap-4 md:gap-12 lg:grid-cols-2 lg:gap-20">
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

        {/* Column with information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4 md:space-y-8"
        >
          <ContactInfo contactData={contactData} displayOptions={contactDisplay} />

          {/* Map */}
          {contactData.addresses?.mapSrc && contactDisplay?.showMap && (
            <MapWithSkeleton mapSrc={contactData.addresses?.mapSrc} />
          )}

          {/* Corporate info */}
          {corporate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm md:p-8 dark:border-white/20 dark:bg-white/5"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">{corporate.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{corporate.description}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
