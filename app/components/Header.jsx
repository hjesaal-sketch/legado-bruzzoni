'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header({ lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuGroups = [
    {
      label: 'La Hacienda',
      items: [
        { key: 'donantonio', label: 'Don Antonio', path: '/don-antonio' },
        { key: 'estate', label: 'Historia', path: '/la-hacienda' },
        { key: 'sanJose', label: 'San José', path: '/san-jose' },
        { key: 'siberia', label: 'La Siberia', path: '/la-siberia' },
      ]
    },
    {
      label: 'Productos',
      items: [
        { key: 'coffee', label: 'Nuestro Café', path: '/nuestro-cafe' },
        { key: 'experiences', label: 'Experiencias', path: '/turismo-y-experiencias' },
      ]
    },
    {
      label: 'Proyecto',
      items: [
        { key: 'project', label: 'El Proyecto', path: '/el-proyecto' },
        { key: 'nature', label: 'Naturaleza', path: '/naturaleza' },
      ]
    },
    {
      label: 'Medios',
      items: [
        { key: 'gallery', label: 'Galería', path: '/galeria' },
        { key: 'contact', label: 'Contacto', path: '/contacto' },
      ]
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-brown/10 dark:bg-black/95">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center shrink-0">
            <span className="font-serif text-lg md:text-2xl font-bold text-brown whitespace-nowrap dark:text-gold">
              Hacienda <span className="text-black dark:text-cream">Bruzzoni</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuGroups.map((group) => (
              <div key={group.label} className="relative group">
                <button className="text-sm text-black/80 hover:text-brown transition-colors font-medium dark:text-cream/80 dark:hover:text-gold">
                  {group.label}
                </button>
                <div className="absolute top-full left-0 mt-1 bg-cream dark:bg-[#1a1a1a] border border-brown/10 dark:border-gold/10 rounded-lg shadow-lg py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {group.items.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${lang}${item.path}`}
                      className="block px-4 py-2 text-sm text-black/70 hover:text-brown hover:bg-brown/5 transition-colors dark:text-cream/70 dark:hover:text-gold dark:hover:bg-gold/10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <LanguageSwitcher lang={lang} />
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black p-2 dark:text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - TODO CENTRADO */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col items-center space-y-3 text-center">
              {menuGroups.map((group) => (
                <div key={group.label} className="w-full">
                  <p className="text-xs font-bold text-brown uppercase tracking-wider pt-3 pb-1 border-b border-brown/10 dark:text-gold dark:border-gold/10">
                    {group.label}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${lang}${item.path}`}
                      className="block text-black/80 hover:text-brown transition-colors font-medium py-2 dark:text-cream/80 dark:hover:text-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex items-center justify-center gap-4 pt-3 mt-2 border-t border-brown/10 dark:border-gold/10 w-full">
                <LanguageSwitcher lang={lang} />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}