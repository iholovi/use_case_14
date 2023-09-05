import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../utils/localization/formatDate.js';

function LocalizedDate({ date, formatKey }) {
    const { t, i18n } = useTranslation('date');

    // Get the format object from the translation file
    const format = t(formatKey, { returnObjects: true });

    // Format the date
    const formattedDate = formatDate(date, format, i18n.language);

    // Render the localized date
    return <>{formattedDate}</>;
}

export default LocalizedDate;