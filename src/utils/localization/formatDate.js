export function formatDate(date, format, locale) {
    return new Intl.DateTimeFormat(locale, format).format(date);
}