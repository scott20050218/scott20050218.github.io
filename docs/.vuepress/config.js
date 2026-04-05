module.exports = {
  dest: 'docs/.vuepress/dist',
  // 用户/组织 GitHub Pages（username.github.io 根域名）使用 '/'
  base: '/',
  sidebarDepth: 1,
  head: [
    ['link', { rel: 'icon', href: `web.png` }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: 'Last updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guides/' },
          { text: 'Case', link: '/case/' },
          { text: 'Python', link: '/python/' },
          { text: 'Demo', link: 'https://admin.lihengrui.cn/' },
          { text: '中文', link: '/zh/' },
          { text: 'DE', link: '/de/' }
        ],
        navbar: true,
        sidebar: {
          collapsable: true,
          '/guides/': [
            {
              title: 'Overview',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: 'Doc',
              collapsable: true,
              children: [
                'files/quickLearn',
                'files/env',
                'files/introduce',
                'files/program',
                'files/components',
                'files/log',
              ]
            },
            {
              title: 'ScreenDesign',
              collapsable: true,
              children: [
                'design/basic',
                'design/design',
                { title: 'Principles', path: 'design/principles' },
                { title: 'Process', path: 'design/process' },
                { title: 'Note', path: 'design/attention' },
                { title: 'Question', path: 'design/qa' },
                'design/color',
                'design/price',
              ]
            },
          ],
          '/python/': [
            {
              title: 'Overview',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: 'Env',
              collapsable: true,
              children: [
                'init/install',
                'init/setup',
                'init/IDEvs',
                'init/Jupyter',
              ]
            },
            {
              title: '5 module',
              collapsable: true,
              children: [
                'module/numpy',
                'module/scipy',
                'module/pandas',
                'module/matplotlib',
                'module/scikit-learn',
                'module/cal',
              ]
            },
          ]
        }
      },
      '/zh/': {
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guides/' },
          { text: '案例', link: '/zh/case/' },
          { text: 'Python', link: '/zh/python/' },
          { text: 'demo', link: 'https://admin.lihengrui.cn/' },
          { text: 'EN', link: '/' },
          { text: 'DE', link: '/de/' }
        ],
        navbar: true,
        sidebar: {
          collapsable: true,
          '/zh/guides/': [
            {
              title: '产品概述',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: '文档',
              collapsable: true,
              children: [
                'files/quickLearn',
                'files/env',
                'files/introduce',
                'files/program',
                'files/components',
                'files/log',
              ]
            },
            {
              title: '大屏设计',
              collapsable: true,
              children: [
                'design/basic',
                'design/design',
                { title: '设计原则', path: 'design/principles' },
                { title: '设计流程', path: 'design/process' },
                { title: '注意事项', path: 'design/attention' },
                { title: '问题', path: 'design/qa' },
                'design/color',
                'design/price',
              ]
            },
          ],
          '/zh/python/': [
            {
              title: '概述',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: '环境准备',
              collapsable: true,
              children: [
                'init/install',
                'init/setup',
                'init/IDEvs',
                'init/Jupyter',
              ]
            },
            {
              title: '5个模块',
              collapsable: true,
              children: [
                'module/numpy',
                'module/scipy',
                'module/pandas',
                'module/matplotlib',
                'module/scikit-learn',
                'module/cal',
              ]
            },
          ]
        }
      },
      '/de/': {
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: 'lastUpdated',
        nav: [
          { text: 'Home', link: '/de/' },
          { text: 'A1', link: '/de/A1/' },
          { text: 'A2', link: '/de/A2/' },
          { text: 'B1', link: '/de/B1/' },
          { text: 'Grammatik', link: '/de/gram/' },
          { text: 'EN', link: '/' },
          { text: '中文', link: '/zh/' }
        ],
        navbar: true,
        sidebar: {
          collapsable: true,
          '/de/A1/': [
            {
              title: 'Overview',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: 'Kurs',
              collapsable: true,
              children: [
                'kurs/1_KaffeeoderTee',
                'kurs/2_SpracheimKurs',
                'kurs/3_StaedteLaenderSprachen',
                'kurs/4',
                'kurs/5',
                'kurs/6',
                'kurs/7',
                'kurs/8',
              ]
            },
          ],
          '/de/A2/': [
            {
              title: 'Overview',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: 'Kurs',
              collapsable: true,
              children: [
                'kurs/1',
                'kurs/2',
                'kurs/3',
                'kurs/4',
                'kurs/5',
              ]
            },
          ],
          '/de/B1/': [
            {
              title: 'Overview',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: 'Kurs',
              collapsable: true,
              children: [
                'kurs/1',
                'kurs/2',
                'kurs/3',
                'kurs/4',
                'kurs/5',
                'kurs/6',
              ]
            },
          ],
          '/de/gram/': [
            {
              title: '性数格',
              collapsable: true,
              children: [
                ''
              ]
            },
            {
              title: '形容词变位',
              collapsable: true,
              children: [
                'adj/base'
              ]
            },
          ],
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Personal work display',
      description: 'Rui Li\'s personal official website',
      markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1] },
        lineNumbers: true
      }
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '个人作品展示',
      description: '李锐个人官网',
      markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1] },
        lineNumbers: true
      }
    },
    '/de/': {
      lang: 'de-DE',
      title: 'Personal work display',
      description: 'Rui Li\'s personal official website',
      markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1] },
        lineNumbers: true
      }
    }
  }
}
