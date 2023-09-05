import { formatDate } from './formatDate';

test('formatDate returns formatted string', () => {
    const date = new Date(2022, 8, 15);
    const format = { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = 'en-US';
    expect(formatDate(date, format, locale)).toBe('September 15, 2022');
});