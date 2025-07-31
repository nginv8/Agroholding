'use client';

import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useTheme } from '..';
import type { Theme } from './types';

// import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme();
  const [value, setValue] = useState('');

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null);
      setValue('auto');
    } else {
      setTheme(themeToSet);
      setValue(themeToSet);
    }
  };

  React.useEffect(() => {
    // const preference = window.localStorage.getItem(themeLocalStorageKey)
    // setValue(preference ?? 'auto')

    setValue('light');
  }, []);

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto min-w-20 gap-2 border-input text-foreground"
      >
        <SelectValue
          placeholder="Theme"
          className="placeholder:text-muted-foreground dark:placeholder:text-white/80"
        />
      </SelectTrigger>
      <SelectContent>
        {/* <SelectItem value="auto">Auto</SelectItem> */}
        <SelectItem value="light">Light</SelectItem>
        {/* <SelectItem value="dark">Dark</SelectItem> */}
      </SelectContent>
    </Select>
  );
};
