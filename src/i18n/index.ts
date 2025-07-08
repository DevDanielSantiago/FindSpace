import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import 'intl-pluralrules'; // Import para corrigir um problema em Androids mais antigos
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import {resources} from '../locales';

const STORE_LANGUAGE_KEY = 'user_language';

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (language: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }

      const locales = RNLocalize.getLocales();
      const bestAvailableLanguage = locales.find(locale =>
        Object.keys(resources).includes(locale.languageCode),
      );
      callback(bestAvailableLanguage?.languageTag || 'en');
    } catch (error) {
      console.error('Error detecting language:', error);
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch {
      // algum erro aconteceu
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['language'],
    defaultNS: 'language',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['languageDetector'],
    },
  });

export default i18n;
