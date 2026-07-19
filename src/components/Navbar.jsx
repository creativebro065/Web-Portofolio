import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    return (
        <nav className="sticky top-0 z-50 bg-brutalDark/90 backdrop-blur-md border-b-4 border-brutalDark px-3 sm:px-6 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Container */}
                <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
                    <img src={logo} alt="CreativeBro Logo" className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-brutalDark shadow-brutal" />
                    <div className="text-white font-black text-xs sm:text-lg md:text-xl tracking-wider uppercase flex items-baseline whitespace-nowrap">
                        CREATIVE <span className="text-brutalAmber text-sm sm:text-xl md:text-2xl font-black ml-1">BRO</span>
                    </div>
                </Link>

                {/* Menu Items (Teks Putih) */}
                <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide text-white">
                    <a href="/#services" className="hover:text-brutalAmber transition-colors">{t('navbar.services')}</a>
                    <a href="/#work" className="hover:text-brutalAmber transition-colors">{t('navbar.work')}</a>
                    <a href="/#about" className="hover:text-brutalAmber transition-colors">{t('navbar.about')}</a>
                </div>

                {/* Actions: Lang Toggle & CTA Button */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Language Switcher Button */}
                    <button
                        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                        className="bg-white text-brutalDark font-black text-[10px] sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-brutalDark shadow-brutal hover:bg-brutalAmber hover:text-brutalDark transition-all cursor-pointer uppercase"
                        aria-label="Toggle language"
                    >
                        🌐 {language === 'id' ? 'EN' : 'ID'}
                    </button>

                    {/* CTA Button */}
                    <div>
                        <a href="/#contact" className="bg-brutalAmber text-brutalDark font-black text-[10px] sm:text-sm px-2.5 sm:px-5 py-1.5 sm:py-2 border-2 border-brutalDark shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all block text-center whitespace-nowrap">
                            {t('navbar.cta').replace('->', '→')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}