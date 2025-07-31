'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterFormProps {
  buttonText?: string;
  placeholder?: string;
  variant?: 'v1' | 'v2';
  className?: string;
}

export function NewsletterForm({
  buttonText,
  placeholder,
  variant = 'v1',
  className = '',
}: NewsletterFormProps) {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email) {
      setMessage({ type: 'error', text: t('enter-email') });
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: t('enter-valid-email') });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: t('subscribe-success') });
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage({
          type: 'error',
          text: errorData.message || t('subscribe-error'),
        });
      }
    } catch (_error) {
      setMessage({
        type: 'error',
        text: t('subscribe-network-error'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'v2') {
    return (
      <div className={`max-w-md ${className}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder={placeholder || t('your-email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="h-12 transition-colors focus:border-ring dark:bg-white/10 dark:focus:border-accent"
          />
          <Button type="submit" size="lg" disabled={isLoading} className="w-full">
            {isLoading ? t('subscribing') : buttonText || t('subscribe')}
          </Button>
        </form>
        {message && (
          <div
            className={`mt-4 text-sm ${message.type === 'success' ? 'text-success' : 'text-error'}`}
          >
            {message.text}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder={placeholder || t('your-email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="transition-colors focus:border-ring dark:bg-white/10 dark:focus:border-accent"
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="size-4" />
          <span className="sr-only">
            {isLoading ? t('subscribing') : buttonText || t('subscribe')}
          </span>
        </Button>
      </form>
      {message && (
        <div
          className={`mt-2 text-sm ${message.type === 'success' ? 'text-success' : 'text-error'}`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
