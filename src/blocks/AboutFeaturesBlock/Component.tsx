import { Check } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { AboutFeaturesBlock as AboutFeaturesProps } from '@/payload-types';

import { ParallaxPreview } from './ParallaxPreview';

export const AboutFeaturesBlock: React.FC<AboutFeaturesProps> = (props) => {
  const { title, sbg, theme, mainImage, secondaryImage, features, cta, stats } = props;

  return (
    <section className="relative overflow-hidden py-32" data-theme={theme}>
      <SectionBackground {...sbg} theme={theme} />
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column with images */}
          <ParallaxPreview mainMedia={mainImage} floatingMedia={secondaryImage} />

          {/* Right column with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <SectionTitle {...title} title={title?.title || ''} />

            <div className="mb-12 grid gap-8 sm:grid-cols-2">
              {features?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 shrink-0">
                      <div
                        className={`flex size-6 items-center justify-center rounded-full ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-primary/10'
                        }`}
                      >
                        <Check
                          className={`size-4 ${theme === 'dark' ? 'text-accent-400' : 'text-primary-600'}`}
                        />
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`mb-2 font-semibold ${theme === 'dark' ? 'text-foreground' : 'text-foreground'}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-muted-foreground'}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {(cta || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" {...link} />;
              })}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-card/30 to-transparent'
                    : 'bg-gradient-to-br from-card to-transparent'
                }`}
              />
              <div className="relative p-8 text-center">
                <div
                  className={`mb-2 text-4xl font-bold ${theme === 'dark' ? 'text-accent' : 'text-primary'}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm font-medium uppercase tracking-wider ${
                    theme === 'dark' ? 'text-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
