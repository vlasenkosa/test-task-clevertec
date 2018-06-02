export const getOptionsFromObject = (object) => {
    let options = [];
    for (let key in object) {
        options.push({
            value: key,
            text: object[key]
        });
    }
    return options;
};

export const isEmpty = (object) => (Object.keys(object).length === 0);