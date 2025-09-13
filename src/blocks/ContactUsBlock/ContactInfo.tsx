import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import type { Config } from 'src/payload-types';

import { IconRenderer } from '@/components/IconRenderer';
import {
  formatAddressInline,
  getAllAddressesSorted,
  getAllEmailsSorted,
  getAllPhonesSorted,
} from '@/utilities/formatContactInfo';
import { cn } from '@/utilities/ui';

type ContactInfoFromPayload = Config['globals']['contactInfo'];

interface ContactInfoProps {
  contactData: ContactInfoFromPayload;
  displayOptions?: {
    showPhones?: boolean | null;
    showEmails?: boolean | null;
    showAddresses?: boolean | null;
    showWorkingHours?: boolean | null;
  };
}

export default function ContactInfo({ contactData, displayOptions }: ContactInfoProps) {
  const t = useTranslations();
  let wrapperIndex = 0;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
      {/* Add phones */}
      {displayOptions?.showPhones !== false && contactData.phones?.items
        ? (() => {
            const sortedPhones = getAllPhonesSorted(contactData);

            return (
              <ItemsWrapper
                key={`phone-wrapper-${contactData.id}`}
                iconName="LuPhone"
                title={contactData.phones.title || t('phones-title')}
                description={contactData.phones.description || ''}
                index={wrapperIndex++}
              >
                {sortedPhones.map((item, index) => (
                  <p
                    key={`phone-item-${item.id || index}`}
                    className={cn(item.isPrimary ? 'text-foreground' : 'text-muted-foreground')}
                  >
                    {item.number}
                  </p>
                ))}
              </ItemsWrapper>
            );
          })()
        : null}

      {/* Add emails */}
      {displayOptions?.showEmails !== false && contactData.emails?.items
        ? (() => {
            const sortedEmails = getAllEmailsSorted(contactData);

            return (
              <ItemsWrapper
                key={`emails-wrapper-${contactData.id}`}
                iconName="LuMail"
                title={contactData.emails.title || t('emails-title')}
                description={contactData.emails.description || ''}
                index={wrapperIndex++}
              >
                {sortedEmails.map((item, index) => (
                  <p
                    key={`email-item-${item.id || index}`}
                    className={cn(item.isPrimary ? 'text-foreground' : 'text-muted-foreground')}
                  >
                    {item.email}
                  </p>
                ))}
              </ItemsWrapper>
            );
          })()
        : null}

      {/* Add addresses */}
      {displayOptions?.showAddresses !== false && contactData.addresses?.items
        ? (() => {
            const sortedAddresses = getAllAddressesSorted(contactData);

            return (
              <ItemsWrapper
                key={`addresses-wrapper-${contactData.id}`}
                iconName="LuMapPin"
                title={contactData.addresses.title || t('addresses-title')}
                description={contactData.addresses.description || ''}
                index={wrapperIndex++}
              >
                {sortedAddresses.map((item, index) => (
                  <p
                    key={`address-item-${item.id || index}`}
                    className={cn(item.isPrimary ? 'text-foreground' : 'text-muted-foreground')}
                  >
                    {formatAddressInline(item)}
                  </p>
                ))}
              </ItemsWrapper>
            );
          })()
        : null}

      {/* Add workingHours */}
      {displayOptions?.showWorkingHours !== false &&
      (contactData.workingHours?.weekdays ||
        contactData.workingHours?.weekends ||
        contactData.workingHours?.holidays)
        ? (() => {
            const weekdays = contactData.workingHours.weekdays || '';
            const weekends = contactData.workingHours.weekends || '';
            const holidays = contactData.workingHours.holidays || '';
            return (
              <ItemsWrapper
                key={`workingHours-wrapper-${contactData.id}`}
                iconName="LuClock"
                title={contactData.workingHours.title || t('working-hours-title')}
                description={contactData.workingHours.description || ''}
                index={wrapperIndex++}
              >
                {weekdays && (
                  <p key="workingHours-weekdays" className="text-muted-foreground">
                    {weekdays}
                  </p>
                )}
                {weekends && (
                  <p key="workingHours-weekends" className="text-muted-foreground">
                    {weekends}
                  </p>
                )}
                {holidays && (
                  <p key="workingHours-holidays" className="text-muted-foreground">
                    {holidays}
                  </p>
                )}
              </ItemsWrapper>
            );
          })()
        : null}
    </div>
  );
}

const ItemsWrapper: React.FC<{
  children: React.ReactNode[] | React.ReactNode;
  iconName: string;
  title: string;
  description?: string;
  index?: number;
}> = ({ children, iconName, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <div className="relative p-4 md:p-6">
        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/5" />
        <div className="relative">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 dark:bg-white/10 dark:group-hover:bg-accent/20">
              <IconRenderer name={iconName} size={24} className="text-primary dark:text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>

          {children}
          <p className="mt-2 text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
