import React from 'react';
import { render } from '@testing-library/react';
import LocalizedNumber from './LocalizedNumber';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
        i18n: {
            language: 'en',
        },
    }),
}));

describe('LocalizedNumber', () => {
    it('renders correctly with props', () => {
        const mockNumber = 123456.789;
        const formatKey = 'key1';

        const { getByText } = render(
            <LocalizedNumber number={mockNumber} formatKey={formatKey} />
        );

        expect(getByText('123,456.789')).toBeInTheDocument();
    });

    it('renders correctly with different props', () => {
        const mockNumber = 987654321.123;
        const formatKey = 'key2';

        const { getByText } = render(
            <LocalizedNumber number={mockNumber} formatKey={formatKey} />
        );

        expect(getByText('987,654,321.123')).toBeInTheDocument();
    });
});