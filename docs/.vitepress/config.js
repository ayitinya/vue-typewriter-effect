import { defineConfig } from "vitepress"

export default defineConfig({
    title: 'Vue Typewriter Effect',
    description: 'A Vue wrapper for the typewriter-effect',
    lastUpdated: true,
    base: '/vue-typewriter-effect/',
    head: [
        ['meta', { name: 'google-site-verification', content: 'onpD-kiujyUqtBDe3H5b3XUsxmo6sEriHcamATCYOvI' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-PJ6JK3J6WD' }],
        ['script', {}, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', 'G-PJ6JK3J6WD');`],
    ],
    themeConfig: {
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ],
            },
            {
                text: 'API',
                items: [
                    { text: 'Props', link: '/props' },
                ]
            }
        ]
    }
})