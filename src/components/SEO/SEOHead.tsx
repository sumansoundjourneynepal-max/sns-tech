import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEO = {
  title: 'Sammi and Sounds Tech Co - Empowering Brands. Engineering Futures.',
  description: 'Leading startup software company specializing in website development, mobile apps, digital marketing, social media marketing, branding & design, and professional photography & videography services.',
  keywords: 'web development, mobile app development, digital marketing, social media marketing, branding, design, photography, videography, startup, software company, San Francisco',
  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url: 'https://sammisounds.tech',
  type: 'website',
  author: 'Sammi and Sounds Tech Co',
};

export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const seoTitle = title ? `${title} | Sammi and Sounds Tech Co` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoAuthor = author || defaultSEO.author;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sammi and Sounds Tech Co" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@sammisoundstech" />
      <meta name="twitter:creator" content="@sammisoundstech" />

      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sammi and Sounds Tech Co",
          "alternateName": "S&S Tech Co",
          "url": "https://sammisounds.tech",
          "logo": "https://sammisounds.tech/logo.png",
          "description": seoDescription,
          "foundingDate": "2025",
          "founders": [
            {
              "@type": "Person",
              "name": "Sammi and Sounds Tech Co Founders"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@sammisounds.tech"
          },
          "sameAs": [
            "https://linkedin.com/company/sammisoundstech",
            "https://instagram.com/sammisoundstech",
            "https://facebook.com/sammisoundstech",
            "https://twitter.com/sammisoundstech"
          ],
          "services": [
            "Website Development",
            "Mobile App Development", 
            "Digital Marketing",
            "Social Media Marketing",
            "Branding & Design",
            "Photography & Videography"
          ]
        })}
      </script>
    </Helmet>
  );
}