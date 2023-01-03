import { defineConfig } from "vitepress"

export default defineConfig({
    title: 'Vue Typewriter Effect',
    description: 'A Vue wrapper for the typewriter-effect',
    lastUpdated: true,
    base: '/vue-typewriter-effect/',
    head: [
        ['meta', { name: 'google-site-verification', content: 'onpD-kiujyUqtBDe3H5b' }]
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