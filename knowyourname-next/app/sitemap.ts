import { MetadataRoute } from 'next';
import { COMMON_NAMES } from '@/lib/commonNames';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://knowyourname.co.in';

    const staticRoutes = [
        '',
        '/science',
        '/research',
        '/methods',
        '/encyclopedia',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/cookie-policy',
        '/disclaimer',
        '/editorial-policy',
        '/sitemap-html',
        '/research/acoustic-frequency',
        '/research/bouba-kiki',
        '/research/phonotactics',
        '/research/sound-symbolism',
        '/research/typing-effort',
    ];

    // Generate name routes
    const nameRoutes = COMMON_NAMES.map((name) => `/name/${name.toLowerCase()}`);

    const allRoutes = [...staticRoutes, ...nameRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route.startsWith('/name/') ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/name/') ? 0.7 : 0.8,
    }));
}

