'use client';

import React, { useState } from 'react';
import * as motion from 'motion/react-client';

export const MapWithSkeleton: React.FC<{ mapSrc: string }> = ({ mapSrc }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[300px] md:h-[400px]">
      {/* Skeleton Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 z-0 flex animate-pulse items-center justify-center rounded-2xl bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600">
          <div className="relative">
            <div className="flex size-8 items-center justify-center rounded-full bg-yellow-400">
              <div className="size-3 rounded-full bg-white" />
            </div>
            <div className="absolute left-0 top-0 size-8 animate-ping rounded-full bg-yellow-400 opacity-75" />
          </div>
        </div>
      )}

      {/* Map */}
      <motion.iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Google Map with company location"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10 size-full"
      />
    </div>
  );
};
