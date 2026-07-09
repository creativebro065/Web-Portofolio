import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const servicesList = [
        {
            tag: t('services.web_tag'),
            title: t('services.web_title'),
            desc: t('services.web_desc'),
            color: 'bg-brutalAmber'
        },
        {
            tag: t('services.mobile_tag'),
            title: t('services.mobile_title'),
            desc: t('services.mobile_desc'),
            color: 'bg-white'
        },
        {
            tag: t('services.backend_tag'),
            title: t('services.backend_title'),
            desc: t('services.backend_desc'),
            color: 'bg-brutalSlate'
        }
    ];

    return (
        <section id="services" className="py-20 px-6 bg-white/5 border-b-4 border-brutalDark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-white">
                    {t('services.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesList.map((item, index) => (
                        <div key={index} className="bg-brutalCard p-8 border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <span className={`${item.color} text-brutalDark font-black text-xs px-2 py-1 border-2 border-brutalDark uppercase tracking-wider block w-max mb-6 shadow-brutal-hover`}>
                                    {item.tag}
                                </span>
                                <h2 className="text-2xl font-black uppercase mb-4 text-brutalDark">{item.title}</h2>
                                <p className="text-brutalDark font-medium leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="mt-8 font-bold text-sm text-brutalAmber cursor-pointer hover:underline">
                                {t('services.learn_more').replace('->', '→')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}