module.exports = {
  dest: '/Users/lihengrui/tmp/html',  // 设置输出目录
  base: './',
  sidebarDepth: 1,
  head: [
    ['link', { rel: 'icon', href: `logo.png` }],
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
        lastUpdated: '上次更新',
        nav: [
          {text: '首页', link: '/'},
          {text: '指南', link: '/guides/'},
          {text: '案例', link: '/case/'},
          {text: 'Python', link: '/python/'},
          {text: 'demo', link: 'https://admin.lihengrui.cn/'}
        ],
        navbar: true,
        sidebar: {
          collapsable: true,
          '/guides/': [
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
                {title: '设计原则', path: 'design/principles'},
                {title: '设计流程', path: 'design/process'},
                {title: '注意事项', path: 'design/attention'},
                {title: '问题', path: 'design/qa'},
                'design/color',
                'design/price',
                // 'design/temple',
                // 'design/lines',
              ]
            },
          ],
          '/python/':[
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
      '/en/':{
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: 'lastUpdated',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guides/' },
          { text: 'Case', link: '/en/case/' },
          { text: 'Python', link: '/en/python/'},
          { text: 'Demo', link: 'https://admin.lihengrui.cn/' }
        ],
        navbar: true,
        sidebar: {
          collapsable: true,
          '/en/guides/': [
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
                { title:'Principles', path: 'design/principles'},
                { title:'Process', path: 'design/process'},
                { title:'Note', path: 'design/attention'},
                { title:'Question', path: 'design/qa'},
                'design/color',
                'design/price',
                // 'design/temple',
                // 'design/lines',
              ]
            },
          ],
          '/en/python/':[
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
      '/de/':{
              search: true,
              searchMaxSuggestions: 5,
              lastUpdated: 'lastUpdated',
              nav: [
                { text: 'Home', link: '/de/' },
                { text: 'A1', link: '/de/A1/' },
                { text: 'A2', link: '/de/A2/' },
                { text: 'B1', link: '/de/B1/'},
                { text: 'Grammatik', link: '/de/gram/' }
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
                      'kurs/KaffeeoderTee',
                    ]
                  },
                ],
                '/de/A2/':[
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
                        'kurs/leben',
                        ]
                   },
                  ],
                '/de/B1/':[
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
                        'kurs/metropolen',
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
      lang: 'zh-CN',
      title: '个人作品展示',
      // base: '/datav-docs/',
      description: '李锐个人官网',
      markdown: {
        // markdown-it-anchor 的选项
        anchor: {permalink: false},
        // markdown-it-toc 的选项
        toc: {includeLevel: [1]},
        lineNumbers: true
      }
      // sidebarDepth: 1,
      // head: [
      //   ['link', {rel: 'icon', href: `logo.png`}],
      //   ['meta', {name: 'theme-color', content: '#1890ff'}],
      //   ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
      //   ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
      //   ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
      // ]
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Personal work display',
      description: 'Rui Li\'s personal official website',
        markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1] },
        lineNumbers: true
      }
    },
    '/de/': {
        lang: 'de-DE', // 将会被设置为 <html> 的 lang 属性
        title: 'Personal work display',
        description: 'Rui Li\'s personal official website',
            markdown: {
            // markdown-it-anchor 的选项
            anchor: { permalink: false },
            // markdown-it-toc 的选项
            toc: { includeLevel: [1] },
            lineNumbers: true
        }
    }
  }
}
