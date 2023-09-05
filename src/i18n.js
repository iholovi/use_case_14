import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import uaTranslation from './locales/ua/translation.json';

import enNumberFormat from './locales/en/number.json';
import frNumberFormat from './locales/fr/number.json';
import uaNumberFormat from './locales/ua/number.json';

import enDateFormat from './locales/en/date.json';
import frDateFormat from './locales/fr/date.json';
import uaDateFormat from './locales/ua/date.json';

import enUnits from './locales/en/units.json';
import frUnits from './locales/fr/units.json';
import uaUnits from './locales/ua/units.json';

const resources = {
    en: {
        translation: enTranslation,
        number: enNumberFormat,
        date: enDateFormat,
        units: enUnits,
    },
    fr: {
        translation: frTranslation,
        number: frNumberFormat,
        date: frDateFormat,
        units: frUnits,
    },
    ua: {
        translation: uaTranslation,
        number: uaNumberFormat,
        date: uaDateFormat,
        units: uaUnits,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // language to use, more languages can be added here
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;