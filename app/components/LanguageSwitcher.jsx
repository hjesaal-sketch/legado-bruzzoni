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

  const handleLanguageChange = (newLang) => {
    const segments = pathname.split('/');
    let cleanPath = '';
    if (segments.length > 1 && segments[1].length === 2) {
      cleanPath = '/' + segments.slice(2).join('/');
    } else {
      cleanPath = pathname;
    }
    const newPath = cleanPath === '/' || cleanPath === '' ? `/${newLang}` : `/${newLang}${cleanPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-black/80 hover:text-brown transition-colors font-medium dark:text-cream/80 dark:hover:text-gold"
      >
        {currentLang.label}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-cream dark:bg-[#1a1a1a] border border-brown/10 dark:border-gold/10 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageChange(l.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-brown/5 dark:hover:bg-gold/10 transition-colors ${
                lang === l.code 
                  ? 'text-brown dark:text-gold font-semibold' 
                  : 'text-black/70 dark:text-cream/70 hover:text-brown dark:hover:text-gold'
              }`}
            >
              {l.label} - {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}