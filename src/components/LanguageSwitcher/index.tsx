'use client'

import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface LanguageSwitcherProps {
  currentLocale: string
  labels: {
    language: string
  }
}

export function LanguageSwitcher({
  currentLocale,
  labels,
}: LanguageSwitcherProps) {
  const router = useRouter()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'uk', name: 'Українська' },
  ]

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname
    const segments = currentPath.split('/')
    segments[1] = locale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">{labels.language}:</span>
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
