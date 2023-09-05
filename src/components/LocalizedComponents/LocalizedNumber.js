import React from 'react';
import { useTranslation } from 'react-i18next';

function LocalizedNumber({ number, formatKey }) {
    const { t, i18n } = useTranslation('number');

    // Obtain the number format from the translation file via the format key
    const format = t(formatKey, { returnObjects: true });

    // Format the number according to the retrieved format
    const formattedNumber = new Intl.NumberFormat(i18n.language, format).format(number);

    return <>{formattedNumber}</>;
}

export default LocalizedNumber;