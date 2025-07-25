import type React from 'react';
import * as motion from 'motion/react-client';

import { FormBlock, FormBlockType } from '@/blocks/Form/Component';
import { IconRenderer } from '@/components/IconRenderer';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { ContactUsBlock as ContactUsBlockProps } from '@/payload-types';

type ContactUsBlockType = Omit<ContactUsBlockProps, 'blocks'> & {
  blocks?: FormBlockType[] | [];
};

export const ContactUsBlock: React.FC<ContactUsBlockType> = (props) => {
  const { title, background, theme, contactInfo = [], blocks, corporate } = props;

  return (
    <section className="relative py-32" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle {...title} title={title?.title || ''} theme={theme} />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {blocks?.map((block, index) => {
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
            <div className="grid gap-8 sm:grid-cols-2">
              {contactInfo?.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6">
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/5" />
                    <div className="relative">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 dark:bg-white/10 dark:group-hover:bg-accent/20">
                        {info.icon && (
                          <IconRenderer
                            name={info.icon}
                            size={24}
                            className="text-primary dark:text-accent"
                          />
                        )}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{info.title}</h3>
                      {info.details &&
                        info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail.text}
                          </p>
                        ))}
                      <p className="mt-2 text-sm text-muted-foreground/70">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

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
