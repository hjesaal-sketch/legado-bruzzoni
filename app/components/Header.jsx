'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: 'Inicio', path: '/' },
    { key: 'estate', label: 'La Hacienda', path: '/la-hacienda' },
    { key: 'history', label: 'Nuestra Historia', path: '/nuestra-historia' },
    { key: 'sanJose', label: 'San José', path: '/san-jose' },
    { key: 'siberia', label: 'La Siberia', path: '/la-siberia' },
    { key: 'coffee', label: 'Nuestro Café', path: '/nuestro-cafe' },
    { key: 'experiences', label: 'Turismo y Experiencias', path: '/turismo-y-experiencias' },
    { key: 'project', label: 'El Proyecto', path: '/el-proyecto' },
    { key: 'nature', label: 'Naturaleza', path: '/naturaleza' },
    { key: 'gallery', label: 'Galería', path: '/galeria' },
    { key: 'contact', label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-brown/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <span className="font-serif text-2xl font-bold text-brown">
              Hacienda <span className="text-black">Bruzzoni</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={`/${lang}${item.path}`}
                className="text-sm text-black/80 hover:text-brown transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher lang={lang} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${lang}${item.path}`}
                  className="text-black/80 hover:text-brown transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-brown/10">
                <LanguageSwitcher lang={lang} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}