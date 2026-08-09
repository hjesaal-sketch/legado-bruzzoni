'use client';

import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export function LanguageSwitcher({ lang }) {
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
  };

  return (
    <div className="flex items-center space-x-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => handleLanguageChange(l.code)}
          className={`px-2 py-1 text-xs font-medium transition-colors rounded ${
            lang === l.code
              ? 'bg-brown text-cream'
              : 'text-black/60 hover:text-brown hover:bg-brown/10'
          }`}
          aria-label={`Switch to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}