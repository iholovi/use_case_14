import { getUnits, convertUnits } from './convertUnits';
import i18n from 'i18next';

beforeEach(() => {
    i18n.init({
        resources: {
            en: {
                units: {
                    length: 'inches',
                    weight: 'pounds',
                    volume: 'fl oz'
                }
            },
            fr: {
                units: {
                    length: 'centimètres',
                    weight: 'grammes',
                    volume: 'millilitres'
                }
            },
            ua: {
                units: {
                    length: 'сантиметри',
                    weight: 'грами',
                    volume: 'мілілітри'
                }
            }
        },
        lng: 'en',
        fallbackLng: 'en',
    });
});

// Define the values to test
const values = [10, 20, 30];
const unitTypes = ['length', 'weight', 'volume'];

// Loop over languages
['en', 'fr', 'ua'].forEach(lng => {
    // Testing getUnit for each language and unit type
    unitTypes.forEach(unitType => {
        test(`getUnits returns correct unit string for ${lng} and ${unitType}`, () => {
            i18n.changeLanguage(lng);
            const units = getUnits(unitType);
            expect(units).toBe(i18n.t(unitType, { ns: 'units' }));
        });
    });

    // Testing convertUnits for each language, unit type and value
    unitTypes.forEach(unitType => {
        values.forEach(value => {
            test(`convertUnits returns correctly formatted string for ${lng}, ${unitType} and ${value}`, () => {
                i18n.changeLanguage(lng);
                expect(convertUnits(value, unitType)).toBe(`${value} ${i18n.t(unitType, { ns: 'units' })}`);
            });
        });
    });
});