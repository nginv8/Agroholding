import React from 'react';

import type { SlideContainerProps } from './types';

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, emblaRef }) => (
  <div className="flex min-h-[calc(100vh-112px)] overflow-hidden" ref={emblaRef}>
    <div className="flex w-full touch-pan-y touch-pinch-zoom">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="flex min-w-0 flex-[0_0_100%] transform-gpu">
          {child}
        </div>
      ))}
    </div>
  </div>
);
