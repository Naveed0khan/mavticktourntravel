import { SITE_CONFIG } from '../constants/siteConfig';

/**
 * Enhanced SEO utility for managing page metadata
 * Replaces the old setSEO function with better practices
 */

// Generate canonical URL
export const getCanonicalUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.seo.url}${cleanPath}`;
};

// Generate OpenGraph image URL
export const getOGImageUrl = (imagePath = SITE_CONFIG.seo.image) => {
  if (imagePath.startsWith('http')) return imagePath;
  return `${SITE_CONFIG.seo.url}${imagePath}`;
};

// Generate JSON-LD structured data for Organization
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: SITE_CONFIG.name,
  alternateName: 'MakPie Tour and Travels',
  url: SITE_CONFIG.seo.url,
  logo: SITE_CONFIG.seo.logo,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Munawar Abad, Royal Samad Complex, Room No. 104, opposite Vishal Mega Mart',
    addressLocality: 'Srinagar',
    addressRegion: 'Jammu and Kashmir',
    postalCode: '190001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '34.0810',
    longitude: '74.8147',
  },
  areaServed: SITE_CONFIG.companyInfo.areaServed,
  priceRange: SITE_CONFIG.companyInfo.priceRange,
  paymentAccepted: SITE_CONFIG.companyInfo.paymentAccepted.join(', '),
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.youtube,
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
});

// Generate JSON-LD for Tour Package (Product)
export const getTourPackageSchema = (packageData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: packageData.title,
  description: packageData.description,
  image: packageData.image,
  brand: {
    '@type': 'Brand',
    name: SITE_CONFIG.name,
  },
  offers: {
    '@type': 'Offer',
    price: packageData.price ? packageData.price.replace(/[₹,]/g, '') : '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: getCanonicalUrl(packageData.url),
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
  },
  aggregateRating: packageData.rating ? {
    '@type': 'AggregateRating',
    ratingValue: packageData.rating.toString(),
    reviewCount: packageData.reviews ? packageData.reviews.toString() : '0',
    bestRating: '5',
    worstRating: '1',
  } : undefined,
  provider: {
    '@type': 'TravelAgency',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.seo.url,
  },
});

// Generate JSON-LD for Destination/Place
export const getDestinationSchema = (destinationData) => ({
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: destinationData.title,
  description: destinationData.description,
  image: destinationData.image,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Jammu and Kashmir',
    addressCountry: 'IN',
  },
  touristType: ['Families', 'Couples', 'Adventure Seekers', 'Nature Lovers'],
});

// Generate JSON-LD for BreadcrumbList
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: getCanonicalUrl(item.url),
  })),
});

// Generate JSON-LD for FAQ
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q || faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a || faq.answer,
    },
  })),
});

// Generate JSON-LD for Review
export const getReviewSchema = (reviews) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    datePublished: review.date || new Date().toISOString().split('T')[0],
    reviewBody: review.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating || '5',
      bestRating: '5',
      worstRating: '1',
    },
  })),
});

// Generate complete SEO metadata object for Helmet
export const generateSEOMetadata = ({
  title,
  description,
  keywords = [],
  canonicalPath = '',
  image = SITE_CONFIG.seo.image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = SITE_CONFIG.name,
}) => {
  const fullTitle = title.includes(SITE_CONFIG.name) 
    ? title 
    : `${title} | ${SITE_CONFIG.name}`;
  
  const canonical = getCanonicalUrl(canonicalPath);
  const ogImage = getOGImageUrl(image);
  
  const allKeywords = [
    ...keywords,
    ...SITE_CONFIG.seo.keywords,
  ].join(', ');

  return {
    title: fullTitle,
    meta: [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: allKeywords },
      { name: 'author', content: author },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: SITE_CONFIG.name },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: title },
      { name: 'twitter:site', content: '@makpie_travels' },
    ],
    link: [
      { rel: 'canonical', href: canonical },
    ],
  };
};

// Legacy function for backward compatibility
export const setSEO = ({ title, description, keywords }) => {
  if (title) {
    document.title = title;
  }
  
  const ensureMeta = (name) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    return tag;
  };
  
  if (description) {
    ensureMeta('description').setAttribute('content', description);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);
  }
  
  if (keywords) {
    ensureMeta('keywords').setAttribute('content', 
      Array.isArray(keywords) ? keywords.join(', ') : keywords
    );
  }
};

export default {
  getCanonicalUrl,
  getOGImageUrl,
  generateSEOMetadata,
  getOrganizationSchema,
  getTourPackageSchema,
  getDestinationSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getReviewSchema,
  setSEO, // Keep for backward compatibility
};

