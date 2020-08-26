module.exports = {
    title: 'OWD.js 2.0',
    description: 'Optionally reactive framework for server-side generated markup',
    themeConfig: {
        theme: '@vuepress/vue',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Authors', link: 'https://www.owlsdepartment.com/', target:'_blank' },
            { text: 'GitHub', link: '#', target:'_blank' }
        ],
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: true,
        sidebar: [
            '/guide',
            '/components',
            '/component-decorators',
            '/modules',
            '/addons',
            '/meta'
        ]
    }
}