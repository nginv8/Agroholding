import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import * as motion from 'motion/react-client';
import { getTranslations } from 'next-intl/server';

import { IconRenderer } from '@/components/IconRenderer';
import { CMSLink } from '@/components/Link';
import { Logo } from '@/components/Logo/Logo';
import { Media } from '@/components/Media';
import { NewsletterForm } from '@/components/NewsletterForm';
import { SectionBackground } from '@/components/SectionBackground';
import { ThemeSelector } from '@/providers/Theme/ThemeSelector';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { ContactInfo, Footer as FooterType } from '@/payload-types';

interface FooterV2Props {
  footerData: FooterType;
}

export async function FooterV2({ footerData }: FooterV2Props) {
  const { logo, description, sbg, theme, navGroups = [], newsletter, copyright } = footerData;
  const logoStyle = theme === 'dark' ? 'light' : 'dark';
  const t = await getTranslations();

  // Get contact info from global
  const contactInfo: ContactInfo = await getCachedGlobal('contactInfo', 1)();
  const socialLinks = contactInfo?.socialMedia?.items || [];

  // Get primary contact details
  const primaryAddress =
    contactInfo?.addresses?.items?.find((addr) => addr.isPrimary) ||
    contactInfo?.addresses?.items?.[0];
  const primaryPhone =
    contactInfo?.phones?.items?.find((phone) => phone.isPrimary) || contactInfo?.phones?.items?.[0];
  const primaryEmail =
    contactInfo?.emails?.items?.find((email) => email.isPrimary) || contactInfo?.emails?.items?.[0];

  const formatAddress = (
    address: NonNullable<NonNullable<ContactInfo['addresses']>['items']>[0]
  ) => {
    if (!address) return '';
    const parts = [
      address.street,
      address.city && address.postalCode ? `${address.city}, ${address.postalCode}` : address.city,
      address.region,
      address.country,
    ].filter(Boolean);
    return parts.join('\n');
  };

  return (
    <footer className="relative overflow-hidden" data-theme={theme}>
      <SectionBackground {...sbg} theme={theme} />

      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {newsletter?.enabled ? (
                <>
                  <h2 className="mb-8 text-4xl font-bold text-foreground">
                    {newsletter?.title || ''}
                  </h2>
                  <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {newsletter?.description || ''}
                  </p>

                  <NewsletterForm
                    variant="v2"
                    buttonText={newsletter.buttonText || t('subscribe')}
                    placeholder={t('your-email')}
                  />
                </>
              ) : (
                <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  {description || ''}
                </p>
              )}

              {socialLinks.length > 0 && (
                <div className="mt-12 flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -3 }}
                      className="rounded-full bg-muted/20 p-3 text-foreground transition-colors hover:bg-muted/30 hover:text-primary-700 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-accent-300"
                    >
                      <IconRenderer
                        name={social.icon || 'LuMessageCircleMore'}
                        size={24}
                        className="size-6"
                      />
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-12 md:grid-cols-2"
            >
              {/* Contact Info */}
              <div>
                <h3 className="mb-6 text-lg font-semibold text-foreground">{t('contacts')}</h3>
                <div className="space-y-4">
                  {primaryPhone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="size-5 text-primary dark:text-accent" />
                      <p className="text-muted-foreground">{primaryPhone.number}</p>
                    </div>
                  )}
                  {primaryEmail && (
                    <div className="flex items-center space-x-3">
                      <Mail className="size-5 text-primary dark:text-accent" />
                      <p className="text-muted-foreground">{primaryEmail.email}</p>
                    </div>
                  )}
                  {primaryAddress && (
                    <div className="flex items-start space-x-3">
                      <MapPin className="mt-1 size-5 text-primary dark:text-accent" />
                      <p className="whitespace-pre-line text-muted-foreground">
                        {formatAddress(primaryAddress)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Nav */}
              <div>
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  {navGroups?.[0].title}
                </h3>
                <ul className="space-y-3">
                  {navGroups
                    ?.flatMap((group) => group.navItems || [])
                    .map((navItem, index) => (
                      <li key={index}>
                        <CMSLink
                          {...navItem.link}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-200 dark:border-primary-800">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <Link href="/">
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

            <p className="text-sm text-muted-foreground dark:text-gray-400">
              {copyright ? `Copyright © ${new Date().getFullYear()} ${copyright}` : ''}
            </p>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
