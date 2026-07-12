import React, { useState } from 'react';
import maintproMain from '../assets/MaintproCMMS/MaintproCMMS1.png';
import maintproFeature from '../assets/MaintproCMMS/MaintproCMMS2.png';

export default function MaintProDetail() {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <div className="min-h-screen bg-brutalDark text-white p-6 md:p-12 font-sans selection:bg-brutalAmber selection:text-brutalDark relative">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <a href="#/" className="inline-block bg-white text-brutalDark font-black text-xs px-4 py-2 border-2 border-brutalDark shadow-brutal mb-8 uppercase tracking-wider hover:bg-brutalAmber transition-colors">
                    &larr; Kembali ke Portofolio
                </a>

                {/* Header */}
                <span className="bg-brutalAmber text-brutalDark font-black text-xs px-3 py-1 border-2 border-brutalDark uppercase tracking-widest block w-max mb-4">
                    MOBILE APPLICATION / INDUSTRIAL MANAGEMENT
                </span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
                    MaintPro CMMS: Digitalisasi Sistem Maintenance Aset Industri
                </h1>

                {/* Direct Link Info */}
                <div className="mb-6 font-bold">
                    Tautan Resmi:{" "}
                    <a 
                        href="https://maintprosmms.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brutalAmber hover:underline uppercase inline-flex items-center gap-1"
                    >
                        maintprosmms.com &nearr;
                    </a>
                </div>

                {/* Gambar Utama */}
                <div className="my-8">
                    <img 
                        src={maintproMain} 
                        alt="MaintPro CMMS Dashboard" 
                        className="w-[65%] md:w-[50%] max-w-[500px] mx-auto h-auto border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber cursor-pointer transition-all duration-300 block crisp-img"
                        onClick={() => setActiveImage(maintproMain)}
                    />
                    <p className="text-xs text-gray-400 mt-2 italic font-semibold text-center">
                        *Klik gambar untuk memperbesar dan melihat pratinjau penuh.
                    </p>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-4 border-brutalDark bg-white p-6 text-brutalDark font-bold uppercase text-sm mb-10 shadow-brutal">
                    <div><span className="text-gray-400 block text-xs">Klien</span> Industri Manufaktur</div>
                    <div><span className="text-gray-400 block text-xs">Teknologi</span> Flutter, MySQL</div>
                    <div><span className="text-gray-400 block text-xs">Layanan</span> Jasa Buat Aplikasi</div>
                    <div><span className="text-gray-400 block text-xs">Durasi</span> 3 Bulan</div>
                </div>

                {/* Isi Artikel */}
                <div className="space-y-6 text-gray-300 font-medium text-lg leading-relaxed">
                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// TANTANGAN (THE PROBLEM)</h2>
                    <p>
                        Perusahaan manufaktur mitra kami menghadapi masalah klasik: pencatatan perawatan mesin (*maintenance asset*) masih manual menggunakan kertas. Dampaknya adalah laporan sering hilang, respon terhadap mesin rusak sangat lambat, dan tidak adanya pelacakan performa operator secara *real-time*.
                    </p>

                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// SOLUSI DARI CREATIVEBRO</h2>
                    <p>
                        CreativeBro merancang dan membangun **MaintPro CMMS**, sebuah aplikasi Android berbasis **Flutter** dengan arsitektur database **MySQL** yang solid. Aplikasi ini memungkinkan operator di lapangan untuk langsung melaporkan kerusakan mesin lewat HP, mengunggah foto bukti, dan sistem akan otomatis memberikan notifikasi kepada tim maintainer terdekat.
                    </p>

                    {/* Gambar Fitur */}
                    <div className="my-8">
                        <img 
                            src={maintproFeature} 
                            alt="MaintPro Operator Flow" 
                            className="w-[65%] md:w-[50%] max-w-[500px] mx-auto h-auto border-4 border-brutalDark shadow-brutal hover:shadow-brutal-amber cursor-pointer transition-all duration-300 block crisp-img"
                            onClick={() => setActiveImage(maintproFeature)}
                        />
                    </div>

                    <h2 className="text-2xl font-black uppercase text-brutalAmber">// HASIL & DAMPAK BISNIS</h2>
                    <ul className="list-disc pl-6 space-y-2 text-white font-bold">
                        <li>Respon perbaikan mesin meningkat <span className="text-brutalAmber">200% lebih cepat</span>.</li>
                        <li>Biaya operasional akibat kerusakan mesin dadakan berkurang hingga 35%.</li>
                        <li>100% data riwayat perawatan mesin tercatat aman dan transparan di database.</li>
                    </ul>
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
                            href="https://maintprosmms.com" 
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