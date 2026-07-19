import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import trometMain from '../assets/TrometIndonesia/Trometindonesia1.png';
import trometDetail from '../assets/TrometIndonesia/Trometindonesia2.png';

export default function TroMetDetail() {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <div className="min-h-screen bg-brutalDark text-white p-6 md:p-12 font-sans selection:bg-brutalAmber selection:text-brutalDark relative">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-block bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal mb-8 uppercase tracking-wider hover:bg-brutalAmber transition-colors">
                    &larr; Kembali ke Portofolio
                </Link>

                <span className="bg-brutalAmber text-brutalDark font-black text-xs px-3 py-1 border-2 border-brutalDark uppercase tracking-widest block w-max mb-4">
                    WEB LANDING PAGE / MEDICAL INDUSTRY
                </span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
                    trometindonesia.com: Web Landing Page Multi Bahasa
                </h1>

                {/* Direct Link Info */}
                <div className="mb-6 font-bold">
                    Tautan Resmi:{" "}
                    <a 
                        href="https://trometindonesia.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brutalAmber hover:underline uppercase inline-flex items-center gap-1"
                    >
                        trometindonesia.com &nearr;
                    </a>
                </div>

                {/* Gambar Dashboard */}
                <div className="my-8">
                    <img 
                        src={trometMain} 
                        alt="Tampilan Dashboard Web TRO MET Indonesia" 
                        className="w-[65%] md:w-[50%] max-w-[500px] mx-auto h-auto border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber cursor-pointer transition-all duration-300 block crisp-img"
                        onClick={() => setActiveImage(trometMain)}
                    />
                    <p className="text-xs text-gray-400 mt-2 italic font-semibold text-center">
                        *Klik gambar untuk memperbesar dan melihat pratinjau penuh.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-4 border-brutalDark bg-white p-6 text-brutalDark font-bold uppercase text-sm mb-10 shadow-brutal">
                    <div><span className="text-gray-400 block text-xs">Klien</span> PT Tromet Indonesia</div>
                    <div><span className="text-gray-400 block text-xs">Teknologi</span> React, Tailwind CSS</div>
                    <div><span className="text-gray-400 block text-xs">Layanan</span> Jasa Buat Website</div>
                    <div><span className="text-gray-400 block text-xs">Durasi</span> 2 Minggu</div>
                </div>

                <div className="space-y-6 text-gray-300 font-medium text-lg leading-relaxed">
                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// TANTANGAN (THE PROBLEM)</h2>
                    <p>
                        Tromet Indonesia membutuhkan platform web landing page profesional untuk memasarkan produk trolley medis berkualitas tinggi ke pasar global. Tantangannya adalah menampilkan katalog spesifikasi alat medis secara detail, informatif, dan memiliki dukungan multi-bahasa (Inggris, Mandarin, dan Arab) untuk menjangkau calon pembeli internasional secara efektif.
                    </p>

                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// SOLUSI DARI CREATIVEBRO</h2>
                    <p>
                        CreativeBro merancang dan membangun platform web landing page premium untuk **trometindonesia.com** menggunakan **React** dan **Tailwind CSS**. Desain web dibuat sangat bersih (clean), modern, responsif, dan ramah SEO agar mudah ditemukan oleh rumah sakit atau distributor alat kesehatan di Google. Sistem translasi bahasa yang dinamis diimplementasikan dengan mulus tanpa merusak tata letak visual.
                    </p>

                    {/* Gambar Detail */}
                    <div className="my-8">
                        <img 
                            src={trometDetail} 
                            alt="TRO MET Detail Dashboard" 
                            className="w-[65%] md:w-[50%] max-w-[500px] mx-auto h-auto border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber cursor-pointer transition-all duration-300 block crisp-img"
                            onClick={() => setActiveImage(trometDetail)}
                        />
                    </div>

                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// HASIL SEBELUM & SESUDAH</h2>
                    <p>
                        Landing page berhasil diluncurkan dengan performa pemuatan yang instan. Tampilan visual katalog trolley medis tersaji secara eksklusif, meningkatkan conversion rate leads B2B dari luar negeri. Web ini siap meroketkan ekspansi branding produk medis Tromet Indonesia di pasar global.
                    </p>
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
                    <div className="max-w-5xl max-h-[80vh] border-4 border-brutalDark bg-white p-2 shadow-brutal-amber overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <img src={activeImage} alt="Preview Full" className="w-full h-auto max-h-[75vh] object-contain crisp-img" />
                    </div>
                    <div className="mt-6 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <a 
                            href="https://trometindonesia.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-brutalAmber text-brutalDark font-black text-sm px-6 py-3 border-2 border-brutalDark shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-wider inline-block text-center cursor-pointer"
                        >
                            Kunjungi Website Resmi &rarr;
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}