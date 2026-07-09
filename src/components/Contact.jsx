import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t, language } = useLanguage();

    return (
        <section id="contact" className="py-20 px-6 border-t-4 border-brutalDark bg-brutalDark text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 
                    className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none"
                    dangerouslySetInnerHTML={{ __html: t('contact.headline') }}
                />
                <p className="font-bold text-lg md:text-xl max-w-xl mx-auto mb-10 text-gray-300">
                    {t('contact.subheadline')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="https://wa.me/6285714108067"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-block bg-brutalAmber text-brutalDark font-black text-lg md:text-xl px-10 py-5 border-4 border-brutalDark shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all uppercase tracking-wider cursor-pointer"
                    >
                        {t('contact.cta_button')}
                    </a>
                    <a
                        href="mailto:creativebro065@gmail.com"
                        className="w-full sm:w-auto inline-block bg-white text-brutalDark font-black text-lg md:text-xl px-10 py-5 border-4 border-brutalDark shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all uppercase tracking-wider cursor-pointer"
                    >
                        {language === 'id' ? 'KIRIM EMAIL ✉️' : 'EMAIL US ✉️'}
                    </a>
                </div>
                <div className="mt-8 text-sm font-bold text-gray-400">
                    WA: 085714108067 | Gmail: creativebro065@gmail.com
                </div>
            </div>
        </section>
    );
}