let loadPromise = null;

export function loadGoogleMaps(apiKey) {
    if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
        return Promise.resolve(window.google);
    }
    if (!loadPromise) {
        loadPromise = new Promise((resolve, reject) => {
            const existing = document.getElementById('google-maps-js');
            if (existing) {
                existing.addEventListener('load', () => resolve(window.google));
                existing.addEventListener('error', reject);
                return;
            }
            const script = document.createElement('script');
            script.id = 'google-maps-js';
            script.async = true;
            script.defer = true;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
            script.onload = () => resolve(window.google);
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    return loadPromise;
}


