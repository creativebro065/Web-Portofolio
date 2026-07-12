import React, { useState } from 'react';
import img5 from '../assets/Graphic Desain/5.png';
import img6 from '../assets/Graphic Desain/6.png';
import img7 from '../assets/Graphic Desain/7.png';
import img8 from '../assets/Graphic Desain/8.png';
import img9 from '../assets/Graphic Desain/9.png';
import imgU17 from '../assets/Graphic Desain/indonesia u-17 vs korea utara u-17.png';
import imgVsChina from '../assets/Graphic Desain/indonesia vs china.png';
import imgPersija from '../assets/Graphic Desain/persija vs persik.png';

export default function DesignDetail() {
    const [activeImage, setActiveImage] = useState(null);

    const designs = [
        { src: img5, title: "Social Media Feed Style: Concept 5" },
        { src: img6, title: "Social Media Feed Style: Concept 6" },
        { src: img7, title: "Social Media Feed Style: Concept 7" },
        { src: img8, title: "Social Media Feed Style: Concept 8" },
        { src: img9, title: "Commercial Brand Design: Concept 9" },
        { src: imgPersija, title: "Match Graphic: Persija vs Persik" },
        { src: imgVsChina, title: "Match Graphic: Indonesia vs China" },
        { src: imgU17, title: "Match Day: Indonesia U-17 vs Korea Utara U-17" }
    ];

    return (
        <div className="min-h-screen bg-brutalDark text-white p-6 md:p-12 font-sans selection:bg-brutalAmber selection:text-brutalDark relative">
            <div className="max-w-6xl mx-auto">
                <a href="#/" className="inline-block bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal mb-8 uppercase tracking-wider hover:bg-brutalAmber transition-colors">
                    &larr; Kembali ke Portofolio
                </a>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight">// GRAPHIC DESIGN & BRANDING GALLERY</h1>

                {/* Grid Gallery Branding */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designs.map((design, index) => (
                        <div 
                            key={index} 
                            className="border-4 border-brutalDark bg-white p-3 shadow-brutal hover:shadow-brutal-amber hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                            onClick={() => setActiveImage(design.src)}
                        >
                            <div className="bg-neutral-900 border-2 border-brutalDark aspect-square overflow-hidden mb-4">
                                <img src={design.src} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <span className="text-brutalDark font-black text-sm uppercase block truncate">
                                {design.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {activeImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
                    onClick={() => setActiveImage(null)}
                >
                    <button 
                        onClick={() => setActiveImage(null)}
                        className="absolute top-4 right-4 bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal uppercase tracking-wider cursor-pointer"
                    >
                        Tutup [X]
                    </button>
                    <div className="max-w-4xl max-h-[85vh] border-4 border-brutalDark bg-white p-2 shadow-brutal-amber overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <img src={activeImage} alt="Preview Full" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
}