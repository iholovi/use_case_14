import React from 'react';
import { convertUnits } from '../../utils/localization/convertUnits';

function LocalizedUnit({ value, unitsType }) {
    const formattedUnit = convertUnits(value, unitsType);

    return <>{formattedUnit}</>;
}

export default LocalizedUnit;