import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness';
}

const StructuredData = ({ type = 'Organization' }: StructuredDataProps) => {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      name: 'Brandयात्रा',
      alternateName: 'Brand Yatra',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://brandyatra.com',
      logo: typeof window !== 'undefined' ? `${window.location.origin}/src/assets/brandyatra-logo.png` : 'https://brandyatra.com/src/assets/brandyatra-logo.png',
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
        email: 'jhasaurav562@gmail.com',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://www.instagram.com/brand_yatraa?igsh=dmprcm1yM2JkODlx'
      ],
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150'
      }
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Brandयात्रा offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer comprehensive digital marketing services including Instagram & Facebook Ads Management, YouTube Ads, Google Ads (Search & Display), Social Media Management, SEO Optimization, Email Marketing & Automation, and Brand Strategy & Consulting.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much do your services cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer three flexible packages: Essential Growth (₹20,000/month), Accelerated Scale (₹50,000/month), and Enterprise (Custom pricing).'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically, you will start seeing initial results within 2-4 weeks, with significant improvements by 2-3 months.'
          }
        }
      ]
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digital Marketing Services',
      provider: {
        '@type': 'Organization',
        name: 'Brandयात्रा'
      },
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Essential Growth Package'
            },
            price: '20000',
            priceCurrency: 'INR'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Accelerated Scale Package'
            },
            price: '50000',
            priceCurrency: 'INR'
          }
        ]
      }
    };

    const structuredData = [organizationSchema, faqSchema, serviceSchema];

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

