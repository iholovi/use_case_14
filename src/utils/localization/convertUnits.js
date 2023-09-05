import i18n from 'i18next';

export const getUnits = (unitsType) => {
    const units = i18n.t(unitsType, { ns: 'units' });

    if (units === unitsType) {
        throw new Error("Failed to find units type format");
    }

    return units;
}

export const convertUnits = (value, unitsType) => {
    try {
        const units = getUnits(unitsType);

        return `${value} ${units}`;
    } catch (error) {
        console.error(error);
        return value.toString();
    }
};