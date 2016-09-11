import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../locales/en/translation';
import zh_CN from '../locales/zh-CN/translation';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'zh-CN',
    ns: ['translation'],
    defaultNS: 'translation',
    keySeparator: '::',
    nsSeparator: ':::',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: en
      },
      'zh-CN': {
        translation: zh_CN
      }
    }
  });


export default i18n;
