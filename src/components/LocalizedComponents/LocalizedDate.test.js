import React from 'react';
import { render } from '@testing-library/react';
import LocalizedDate from './LocalizedDate';
import { formatDate as formatDateUtil } from '../../utils/localization/formatDate.js';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,  // mock implementation of t function
        i18n: {
            language: 'en'
        }
    }),
}));

jest.mock('../../utils/localization/formatDate.js');

describe('LocalizedDate', () => {
    beforeEach(() => {
        formatDateUtil.mockClear();
    });

    it('renders formatted date', () => {
        const testDate = new Date(2022, 8, 15);
        formatDateUtil.mockImplementationOnce(() => '15th of September, 2022');

        const { getByText } = render(<LocalizedDate date={testDate} formatKey='format1' />);

        expect(formatDateUtil).toHaveBeenCalledTimes(1);
        expect(formatDateUtil).toHaveBeenCalledWith(testDate, 'format1', 'en');
        expect(getByText('15th of September, 2022')).toBeInTheDocument();
    });

    it('renders a different formatted date', () => {
        const testDate = new Date(2023, 10, 25);
        formatDateUtil.mockImplementationOnce(() => '25th of November, 2023');

        const { getByText } = render(<LocalizedDate date={testDate} formatKey='format2' />);

        expect(formatDateUtil).toHaveBeenCalledTimes(1);
        expect(formatDateUtil).toHaveBeenCalledWith(testDate, 'format2', 'en');
        expect(getByText('25th of November, 2023')).toBeInTheDocument();
    });

    it('renders yet another different formatted date', () => {
        const testDate = new Date(2024, 11, 31);
        formatDateUtil.mockImplementationOnce(() => 'last day of December, 2023');

        const { getByText } = render(<LocalizedDate date={testDate} formatKey='format3' />);

        expect(formatDateUtil).toHaveBeenCalledTimes(1);
        expect(formatDateUtil).toHaveBeenCalledWith(testDate, 'format3', 'en');
        expect(getByText('last day of December, 2023')).toBeInTheDocument();
    });
});