import React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { getTranslations } from 'next-intl/server';

import { IconRenderer } from '@/components/IconRenderer';
import { CMSLink } from '@/components/Link';
import { Logo } from '@/components/Logo/Logo';
import { Media } from '@/components/Media';
import { NewsletterForm } from '@/components/NewsletterForm';
import { SectionBackground } from '@/components/SectionBackground';
import { ThemeSelector } from '@/providers/Theme/ThemeSelector';
import { getSocialLinks } from '@/utilities/contactInfo';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { ContactInfo as ContactInfoType, Footer as FooterType } from '@/payload-types';

interface FooterV1Props {
  footerData: FooterType;
}

export async function FooterV1({ footerData }: FooterV1Props) {
  const {
    logo,
    sbg,
    description,
    newsletter,
    copyright,
    navGroups = [],
    theme = 'dark',
  } = footerData;
  const logoStyle = theme === 'dark' ? 'light' : 'dark';
  const t = await getTranslations();
  const contactInfo: ContactInfoType = await getCachedGlobal('contactInfo', 1)();
  const socialLinks = getSocialLinks(contactInfo);

  return (
    <footer className="relative overflow-hidden" data-theme={theme}>
      <SectionBackground {...sbg} theme={theme} />
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="mb-6 block text-2xl font-bold">
              {logo?.[logoStyle] && typeof logo[logoStyle] !== 'string' ? (
                <Media
                  resource={logo[logoStyle]}
                  className="h-14 w-auto"
                  imgClassName="object-contain"
                />
              ) : (
                <Logo variant={logoStyle} />
              )}
            </Link>
            {description && <p className="mb-6 max-w-md text-muted-foreground">{description}</p>}

            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url || '#'}
                    className="text-foreground transition-colors hover:text-primary-700 dark:hover:text-accent-300"
                  >
                    <IconRenderer
                      name={social.icon || 'LuMessageCircleMore'}
                      size={24}
                      className="size-6"
                    />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          {/* Nav */}
          {navGroups?.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (groupIndex + 1) * 0.1 }}
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground dark:text-white">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.navItems?.map((navItem, linkIndex) => (
                  <li key={linkIndex}>
                    <CMSLink
                      {...navItem.link}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        {newsletter?.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 border-t border-secondary-200 pt-12 dark:border-primary-800"
          >
            <div className="mx-auto max-w-md text-center">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {newsletter.title || ''}
              </h3>
              <p className="mb-6 text-muted-foreground">{newsletter.description || ''}</p>
              <NewsletterForm
                variant="v1"
                buttonText={newsletter.buttonText || t('subscribe')}
                placeholder={t('your-email')}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-secondary-200 dark:border-primary-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {copyright ? `Copyright © ${new Date().getFullYear()} ${copyright}` : ''}
          </p>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  );
}
