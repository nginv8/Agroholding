import type React from 'react';
import { Send } from 'lucide-react';
import * as motion from 'motion/react-client';

import { IconRenderer } from '@/components/IconRenderer';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import type { ContactUsBlock as ContactUsBlockProps } from '@/payload-types';

export const ContactUsBlock: React.FC<ContactUsBlockProps> = (props) => {
  const { title, background, theme, contactInfo = [], formFields = [], corporate } = props;

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
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-md lg:p-12"
            >
              <form className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {formFields?.slice(0, 2).map((field, index) => (
                    <div key={index} className="space-y-2">
                      <label className="text-sm font-medium text-gray-200">{field.label}</label>
                      <Input
                        placeholder={field.placeholder || ''}
                        className="h-12 border-white/20 bg-white/10 text-white transition-colors placeholder:text-gray-400 focus:border-yellow-400"
                      />
                    </div>
                  ))}
                </div>

                {formFields?.slice(2).map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">{field.label}</label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        placeholder={field.placeholder || ''}
                        className="min-h-[150px] resize-none border-white/20 bg-white/10 text-white transition-colors placeholder:text-gray-400 focus:border-yellow-400"
                      />
                    ) : field.type === 'select' ? (
                      <Select>
                        <SelectTrigger className="h-12 border-white/20 bg-white/10 text-white transition-colors focus:border-yellow-400">
                          <SelectValue placeholder={field.placeholder || 'Select an option'} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option, i) => (
                            <SelectItem key={i} value={option.value || ''}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        type={field.type || 'text'}
                        placeholder={field.placeholder || ''}
                        className="h-12 border-white/20 bg-white/10 text-white transition-colors placeholder:text-gray-400 focus:border-yellow-400"
                      />
                    )}
                  </div>
                ))}

                <Button
                  size="lg"
                  className="group h-12 w-full bg-yellow-400 text-base text-black hover:bg-yellow-500"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
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
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-yellow-400/20">
                        {info.icon && (
                          <IconRenderer name={info.icon} size={24} className="text-yellow-400" />
                        )}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{info.title}</h3>
                      {info.details &&
                        info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300">
                            {detail.text}
                          </p>
                        ))}
                      <p className="mt-2 text-sm text-gray-400">{info.description}</p>
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
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
                        <div className="h-3 w-3 rounded-full bg-white" />
                      </div>
                      {/* Pulsing effect */}
                      <div className="absolute left-0 top-0 h-6 w-6 animate-ping rounded-full bg-yellow-400 opacity-75" />
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
                className="mt-12 rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">{corporate.title}</h3>
                <p className="leading-relaxed text-gray-300">{corporate.description}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
