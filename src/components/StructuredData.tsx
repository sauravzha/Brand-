import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness';
}

const StructuredData = ({ type = 'Organization' }: StructuredDataProps) => {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      name: 'Brandयात्रा',
      alternateName: 'Brand Yatra',
      url: typeof window !== 'undefined' ? window.location.origin : '',
      logo: typeof window !== 'undefined' ? `${window.location.origin}/src/assets/brandyatra-logo.png` : '',
      description: 'Transforming brands into digital journeys through creative marketing, automation, and strategic storytelling.',
      foundingDate: '2024',
      founders: [
        {
          '@type': 'Person',
          name: 'Saurav Jha',
          jobTitle: 'Founder'
        },
        {
          '@type': 'Person',
          name: 'Shruti Choudhary',
          jobTitle: 'Co-Founder'
        }
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello.brandyatra@gmail.com',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://www.instagram.com/brand_yatraa/'
      ],
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      serviceType: [
        'Digital Marketing',
        'Social Media Management',
        'SEO Optimization',
        'Brand Strategy',
        'Email Marketing',
        'PPC Advertising'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50'
      }
    };

    // Remove existing structured data script if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
};

export default StructuredData;

