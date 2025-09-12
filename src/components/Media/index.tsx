import React, { Fragment } from 'react';
import { FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { IMAGE_EXTENSIONS, RAW_EXTENSIONS, VIDEO_EXTENSIONS } from '@/constants/mediaExtensions';

import { ImageMedia } from './ImageMedia';
import type { Props } from './types';
import { VideoMedia } from './VideoMedia';

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props;

  const filename =
    typeof resource === 'object' && resource && 'filename' in resource
      ? resource.filename?.toLowerCase() || ''
      : '';
  const isVideo = VIDEO_EXTENSIONS.some((ext) => filename.endsWith(ext));
  const isImage = IMAGE_EXTENSIONS.some((ext) => filename.endsWith(ext));
  const isRaw = RAW_EXTENSIONS.some((ext) => filename.endsWith(ext));

  const Tag = htmlElement || Fragment;

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? (
        <VideoMedia {...props} />
      ) : isRaw ? (
        <Button variant="outline" size="sm" asChild>
          <a
            href={
              typeof resource === 'object' && resource && 'url' in resource && resource.url !== null
                ? resource.url
                : undefined
            }
            download
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown size={18} className="mr-1.5" />
            {typeof resource === 'object' && resource && 'filename' in resource
              ? resource.filename || 'Download file'
              : 'Download file'}
          </a>
        </Button>
      ) : isImage ? (
        <ImageMedia {...props} />
      ) : null}
    </Tag>
  );
};
