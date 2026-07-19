import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
    const { t } = useLanguage();

    // Load projects dynamically from translations.json
    const projectsList = t('portfolio.projects') || [];

    return (
        <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                        {t('portfolio.title')}
                    </h2>
                    <p className="text-gray-300 font-medium mt-2">{t('portfolio.subtitle')}</p>
                </div>
            </div>

            {/* Responsive grid layout for CMMS, TRO MET, and Coopin */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project, index) => (
                    <div key={index} className="group bg-brutalCard border-4 border-brutalDark shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-amber transition-all duration-200 overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="h-48 bg-brutalDark border-b-4 border-brutalDark p-6 flex flex-col justify-end relative">
                                <div className="absolute top-4 right-4 bg-white text-brutalDark font-bold text-xs px-3 py-1 border border-brutalDark uppercase shadow-brutal-hover">
                                    STUDI KASUS
                                </div>
                                <span className="text-brutalAmber font-black text-xs tracking-widest uppercase mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-brutalAmber transition-colors leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="p-6 bg-brutalCard">
                                <p className="text-brutalDark font-medium text-sm md:text-base leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-brutalCard pt-0">
                            <Link 
                                to={
                                    project.id === 'cmms' 
                                        ? '/project/maintpro' 
                                        : project.id === 'coopin' 
                                            ? '/services/video' 
                                            : '/project/tromet'
                                } 
                                className="inline-block bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal hover:bg-brutalAmber hover:text-brutalDark transition-all uppercase tracking-wider"
                            >
                                {t('portfolio.view_project')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}