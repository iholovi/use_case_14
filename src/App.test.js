import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import App from './App';

i18n.init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to Localization App',
        dateExample: 'Here is an example of a localized date',
        numberExample: 'Here is an example of a localized number',
        unitExample: 'Here is an example of a localized unit'
      }
    },
    fr: {
      translation: {
        welcome: 'Bienvenue dans l\'application de localisation',
        dateExample: 'Voici un exemple de date localisée',
        numberExample: 'Voici un exemple de nombre localisé',
        unitExample: 'Voici un exemple d\'unité localisée'
      }
    },
    ua: {
      translation: {
        welcome: 'Ласкаво просимо до додатку локалізації',
        dateExample: 'Ось приклад локалізованої дати',
        numberExample: 'Ось приклад локалізованого числа',
        unitExample: 'Ось приклад локалізованої одиниці'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
});

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
    );

    expect(getByText(/Welcome to Localization App/i)).toBeInTheDocument();
  });

  it('changes language to French, updates translations', async () => {
    const { findByText, getByLabelText } = render(
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
    );

    fireEvent.change(getByLabelText(/Language:/i), { target: { value: 'fr' } });
    const welcomeFr = await findByText(/Bienvenue dans l'application de localisation/i);

    expect(welcomeFr).toBeInTheDocument();
  });

  it('changes language to Ukrainian, updates translations', async () => {
    const { findByText, getByLabelText } = render(
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
    );

    fireEvent.change(getByLabelText(/Language:/i), { target: { value: 'ua' } });
    const welcomeUa = await findByText(/Ласкаво просимо до додатку локалізації/i);

    expect(welcomeUa).toBeInTheDocument();
  });
});