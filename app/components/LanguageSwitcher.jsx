'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export function LanguageSwitcher({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getCleanPath = () => {
    const segments = pathname.split('/');
    if (segments.length > 1 && segments[1].length === 2) {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  };

  const handleLanguageChange = (newLang) => {
    const cleanPath = getCleanPath();
    const newPath = cleanPath === '/' || cleanPath === '' ? `/${newLang}` : `/${newLang}${cleanPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-black/80 hover:text-brown transition-colors font-medium"
      >
        {currentLang.label}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-cream border border-brown/10 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageChange(l.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-brown/10 transition-colors ${lang === l.code ? 'text-brown font-semibold' : 'text-black/70'}`}
            >
              {l.label} - {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}