import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';
// import Cache from 'i18next-localstorage-cache';

import AR from './i18n/locales/AR';
import EN from './i18n/locales/EN';


const resources = {
    ar: {
        translation: AR

    },
    en: {
        translation: EN
    },
};

// eslint-disable-next-line import/no-named-as-default-member
i18n
    .use(i18nextReactNative)
    .use(initReactI18next)
    // .use(Cache)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    });


export default i18n;
