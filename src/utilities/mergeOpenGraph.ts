import type { Metadata } from 'next';

import { getServerSideURL } from './getURL';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Polisky Agroholding - надійний партнер в аграрній сфері',
  images: [
    {
      url: `${getServerSideURL()}/polisky-agroholding-og.webp`,
    },
  ],
  siteName: 'Polisky Agroholding',
  title: 'Polisky Agroholding',
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
