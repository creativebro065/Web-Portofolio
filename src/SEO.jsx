import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CreativeBro",
    "image": "https://creativebroofficial.vercel.app/favicon.svg",
    "@id": "https://creativebroofficial.vercel.app/#organization",
    "url": "https://creativebroofficial.vercel.app/",
    "telephone": "085714108067",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Bintang No.96, RT.005/RW.002, Sudimara Pinang, Kec. Pinang",
      "addressLocality": "Kota Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15145",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph buat preview pas web lu dishare ke WA / Medsos */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://creativebroofficial.vercel.app/" />
      <meta property="og:image" content="https://creativebroofficial.vercel.app/favicon.svg" />

      {/* JSON-LD Schema untuk Local Business/SEO Google */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}