export const getAllModes = async () => {
    const result = await (await fetch('https://demo1030918.mockable.io/')).json();

    return Object.keys(result).map(mode => ({
        name: mode,
        field: result[mode].field,
    }));
};
