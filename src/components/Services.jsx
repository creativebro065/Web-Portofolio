import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const servicesList = [
        {
            tag: "WEB",
            title: t('services.web_title'),
            desc: t('services.web_desc'),
            color: 'bg-brutalAmber',
            link: '/project/tromet'
        },
        {
            tag: "MOBILE",
            title: t('services.mobile_title'),
            desc: t('services.mobile_desc'),
            color: 'bg-white',
            link: '/project/maintpro'
        },
        {
            tag: "BACKEND",
            title: t('services.backend_title'),
            desc: t('services.backend_desc'),
            color: 'bg-brutalSlate',
            link: '#contact'
        },
        {
            tag: "EDITING",
            title: t('services.video_title'),
            desc: t('services.video_desc'),
            color: 'bg-brutalAmber',
            link: '/services/video'
        },
        {
            tag: "DESIGN",
            title: t('services.design_title'),
            desc: t('services.design_desc'),
            color: 'bg-white',
            link: '/services/design'
        },
        {
            tag: "PRODUCTION",
            title: t('services.production_title'),
            desc: t('services.production_desc'),
            color: 'bg-brutalSlate',
            link: '#contact'
        }
    ];

    return (
        <section id="services" className="py-20 px-6 bg-white/5 border-b-4 border-brutalDark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-white">
                    {t('services.title')}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((item, index) => (
                        <div key={index} className="bg-brutalCard p-8 border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <span className={`${item.color} text-brutalDark font-black text-xs px-2 py-1 border-2 border-brutalDark uppercase tracking-wider block w-max mb-6 shadow-brutal-hover`}>
                                    {item.tag}
                                </span>
                                <h2 className="text-2xl font-black uppercase mb-4 text-brutalDark">{item.title}</h2>
                                <p className="text-brutalDark font-medium leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="mt-8">
                                {item.link.startsWith('/') ? (
                                    <Link to={item.link} className="font-bold text-sm text-brutalAmber hover:underline inline-block">
                                        {t('services.learn_more')}
                                    </Link>
                                ) : (
                                    <a href={item.link} className="font-bold text-sm text-brutalAmber hover:underline inline-block">
                                        {t('services.learn_more')}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}