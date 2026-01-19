'use client';

import { useI18n } from '@/app/contexts/I18nContext';
import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <select
        disabled
        className="bg-dark-secondary text-gray-300 border border-white px-2 md:px-3 py-1 text-xs md:text-sm hover:border-white transition cursor-pointer opacity-50"
      >
        <option>EN</option>
      </select>
    );
  }

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as 'en' | 'id')}
      className="bg-dark-secondary text-white border border-white px-2 md:px-3 py-1 text-xs md:text-sm hover:border-gray-300 transition cursor-pointer font-semibold"
    >
      <option value="en">EN</option>
      <option value="id">ID</option>
    </select>
  );
}
