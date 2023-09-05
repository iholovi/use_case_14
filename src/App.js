import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedDate from './components/LocalizedComponents/LocalizedDate';
import LocalizedNumber from './components/LocalizedComponents/LocalizedNumber';
import LocalizedUnit from './components/LocalizedComponents/LocalizedUnit';

function App() {
    const { t } = useTranslation();
    const [ language, setLanguage ] = useState('en');
    const [ dateKey, setDateKey ] = useState('format1');
    const [ numKey, setNumKey ] = useState('format1');
    const [ unitsKey, setUnitsKey ] = useState('length');

    const { i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage)
            .then(() => {
                setLanguage(i18n.language);
            });
    }

    const date = new Date();
    const number = 1234567890;
    const value = 100;

    return (
        <div className="App">

            <label>
                Language:
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="fr">Francais</option>
                    <option value="ua">Українська</option>
                </select>
            </label>

            <label>
                Date Format:
                <select value={dateKey} onChange={e => setDateKey(e.target.value)}>
                    <option value="format1">Format 1</option>
                    <option value="format2">Format 2</option>
                    <option value="format3">Format 3</option>
                    <option value="format4">Format 4</option>
                </select>
            </label>

            <label>
                Number Format:
                <select value={numKey} onChange={e => setNumKey(e.target.value)}>
                    <option value="format1">Format 1</option>
                    <option value="format2">Format 2</option>
                    <option value="format3">Format 3</option>
                </select>
            </label>

            <label>
                Units Type:
                <select value={unitsKey} onChange={e => setUnitsKey(e.target.value)}>
                    <option value="length">Length</option>
                    <option value="weight">Weight</option>
                    <option value="volume">Volume</option>
                </select>
            </label>

            <p>{t('welcome')}</p>
            <h2>{t('dateExample')}: <LocalizedDate date={date} formatKey={dateKey} /></h2>
            <h2>{t('numberExample')}: <LocalizedNumber number={number} formatKey={numKey} /></h2>
            <h2>{t('unitExample')}: <LocalizedUnit value={value} unitsType={unitsKey} /></h2>
        </div>
    );
}

export default App;