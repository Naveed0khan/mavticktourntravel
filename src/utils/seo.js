const BASE_URL = 'https://makpietravels.com';

export function setSEO({ title, description, keywords, canonicalPath }) {
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
    ensureMeta('keywords').setAttribute('content', Array.isArray(keywords) ? keywords.join(', ') : keywords);
  }
  
  // Set canonical tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  
  // Generate canonical URL
  let canonicalUrl;
  if (canonicalPath) {
    // Use provided canonical path
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    canonicalUrl = `${BASE_URL}${cleanPath}`;
  } else {
    // Use current window location path
    const path = window.location.pathname;
    canonicalUrl = `${BASE_URL}${path}`;
  }
  
  canonicalLink.setAttribute('href', canonicalUrl);
  
  // Also set og:url to match canonical
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', canonicalUrl);
}


