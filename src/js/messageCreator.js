
const createMessage = (formData) => {
    let message = 'Here is your quote for';
    const items = ['rooms', 'flightsOfSteps', 'kitchenChairs', 'ottoman', 'chairs', 'loveseats', 'lazyBoys', 'sectionals'];

    for (let item of items) {
        let count = formData[item];
        if (count > 0) {
            let itemLabel = convertCamelCaseToEnglish(item);
            if (count === 1) {
                itemLabel = singularize(itemLabel);
            }
            message += ` ${count} ${itemLabel},`;
        }
    }

    // Append deodorizer if selected
    if (formData.deodorizer) {
        message += ' and deodorizer';
    }

    // Remove the trailing comma if present
    if (message.endsWith(',')) {
        message = message.slice(0, -1);
    }

    return message;
};

const convertCamelCaseToEnglish = (str) => {
    return str.replace(/([A-Z])/g, ' $1').toLowerCase();
};

const singularize = (str) => {
    // Only remove the trailing 's' if the word ends with an 's'
    return str.endsWith('s') ? str.slice(0, -1) : str;
};

export default createMessage;

