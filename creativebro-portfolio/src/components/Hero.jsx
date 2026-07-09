import React from 'react';
import heroImage from '../assets/logo.svg';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 py-20 text-center border-b-4 border-brutalDark bg-grid-dark">
            {/* Badge (Amber & Navy) */}
            <div className="bg-brutalAmber text-brutalDark font-extrabold text-xs px-3 py-1 border-2 border-brutalDark shadow-brutal uppercase mb-6 tracking-widest animate-bounce">
                {t('hero.badge')}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase max-w-5xl leading-none mb-6 text-white">
                <span className="sr-only">{t('seo.title')}</span>
                {t('hero.headline_1')} <br />
                <span className="bg-white text-brutalDark px-4 py-1 border-4 border-brutalDark inline-block my-2 shadow-brutal-amber rotate-[-1deg]">
                    {t('hero.headline_accent')}
                </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 font-medium text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                {t('hero.subheadline')}
            </p>

            {/* Hero Image / Logo */}
            <div className="mb-12">
                <img src={heroImage} alt="CreativeBro Identity" className="h-40 w-40 md:h-52 md:w-52 aspect-square object-contain bg-white p-4 border-4 border-brutalDark shadow-brutal-amber rounded-full" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#work" className="w-full sm:w-auto bg-white text-brutalDark font-black text-lg px-8 py-4 border-2 border-brutalDark shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-wider">
                    {t('hero.cta_primary')}
                </a>
                <a href="#contact" className="w-full sm:w-auto bg-transparent text-white font-bold text-lg px-8 py-4 border-2 border-white hover:border-brutalAmber hover:text-brutalAmber transition-all uppercase tracking-wider">
                    {t('hero.cta_secondary')}
                </a>
            </div>
        </section>
    );
}