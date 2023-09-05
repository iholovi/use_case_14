import React from 'react';
import { render } from '@testing-library/react';
import i18n from 'i18next';
import LocalizedUnit from './LocalizedUnit';

jest.mock('i18next', () => ({
    t: key => {
        switch (key) {
            case 'milesToKilometers':
                return 'kilometers';
            case 'celsiusToFahrenheit':
                return 'Fahrenheit';
            default:
                return key;
        }
    }
}));

describe('LocalizedUnit', () => {
    it('converts and renders units correctly', () => {
        const { getByText } = render(<LocalizedUnit value={62.1371} unitsType='milesToKilometers' />);
        expect(getByText('62.1371 kilometers')).toBeInTheDocument();
    });

    it('converts and renders different units correctly', () => {
        const { getByText } = render(<LocalizedUnit value={0} unitsType='celsiusToFahrenheit' />);
        expect(getByText('0 Fahrenheit')).toBeInTheDocument();
    });
});