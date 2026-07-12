import React from 'react';
import coopinVideo from '../assets/Vidio Editing/Coopin Mobile Ad.webm';

export default function VideoDetail() {
    return (
        <div className="min-h-screen bg-brutalDark text-white p-6 md:p-12 font-sans selection:bg-brutalAmber selection:text-brutalDark">
            <div className="max-w-4xl mx-auto">
                <a href="#/" className="inline-block bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal mb-8 uppercase tracking-wider hover:bg-brutalAmber transition-colors">
                    &larr; Kembali ke Portofolio
                </a>
                <h1 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight">// VIDEO EDITING & MOTION PRODUCTION</h1>

                {/* Video Player */}
                <div className="border-4 border-brutalDark p-2 bg-white shadow-brutal-amber mb-8">
                    <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
                        <video 
                            controls 
                            className="w-full h-full object-contain" 
                            loop 
                            autoPlay 
                            muted
                            aria-label="Coopin Mobile Ad Video Showcase"
                            title="Coopin Mobile Ad Video Showcase"
                        >
                            <source src={coopinVideo} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Project Context / Info Card */}
                <div className="bg-white border-4 border-brutalDark p-6 text-brutalDark shadow-brutal mb-8">
                    <span className="bg-brutalAmber font-black text-xs px-2.5 py-1 border-2 border-brutalDark uppercase block w-max mb-3">
                        Project Feature: Coopin Mobile Ad
                    </span>
                    <h2 className="text-2xl font-black uppercase mb-2">Coopin Mobile Ad Video Campaign</h2>
                    <p className="font-semibold text-gray-700 leading-relaxed text-sm">
                        Sebuah iklan promosi mobile app Coopin yang diproduksi dengan transisi motion modern, pemotongan ketukan audio yang presisi (beat-matching), dan color grading sinematik untuk memaksimalkan retensi pemirsa dan conversion rate kampanye digital marketing.
                    </p>
                </div>
            </div>
        </div>
    );
}