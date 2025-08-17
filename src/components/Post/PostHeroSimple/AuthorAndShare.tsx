'use client';

import { Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { useSocialShare } from '@/hooks/useSocialShare';
import type { Post } from '@/payload-types';

import { getAuthorInfo } from '../utils';

interface AuthorAndShareProps {
  post: Post;
}

export const AuthorAndShare = ({ post }: AuthorAndShareProps) => {
  const t = useTranslations();
  const author = getAuthorInfo(post);
  const { shareOnFacebook, shareOnTwitter, shareOnLinkedIn, copyToClipboard } = useSocialShare(
    post.title
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`flex flex-col gap-6 sm:flex-row sm:items-center ${author ? 'sm:justify-between' : 'sm:justify-end'}`}
    >
      {author && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
                <span className="font-medium text-green-700">{author.name?.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <p className="text-sm">{t('author')}</p>
                <div className="font-medium text-gray-900">{author.name}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-3">
        <span className="mr-2 text-sm text-gray-500">{t('share')}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={shareOnFacebook}
          title={t('share-on-facebook')}
        >
          <Facebook className="size-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="bg-transparent p-2"
          onClick={shareOnTwitter}
          title={t('share-on-twitter')}
        >
          <Twitter className="size-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="bg-transparent p-2"
          onClick={shareOnLinkedIn}
          title={t('share-on-linkedin')}
        >
          <Linkedin className="size-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={copyToClipboard} title={t('copy-link')}>
          <Share2 className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
};
