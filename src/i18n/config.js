module.exports = {
  localeData: [
    ...require('react-intl/locale-data/de'),
    ...require('react-intl/locale-data/en'),
    ...require('react-intl/locale-data/zh'),
  ],
  languages: [
    { id: 'de', title: 'DE' },
    { id: 'en', title: 'EN' },
    //{ id: 'zh-Hans', title: '简体中文' },
    //{ id: 'zh-Hant', title: '繁體中文' },
  ],
  defaultLocale: 'de',
  ignorePaths: [
    ['/datenschutz/', ['en', 'zh-Hans', 'zh-Hant']],
    ['/agbs/', ['en', 'zh-Hans', 'zh-Hant']],
    ['/rdp/', ['en', 'zh-Hans', 'zh-Hant']],
    ['/blog/', ['en', 'zh-Hans', 'zh-Hant']]
  ],
}
