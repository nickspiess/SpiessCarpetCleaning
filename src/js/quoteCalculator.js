
var totalPrice;
var quoteNum;
var stepPrice;
var chairPrice;
var couchPrice;
var sectionalPrice;

function quoteCalculator(roomCount, flightsOfSteps, chairCount, couchCount, sectionalCount) {
    totalPrice = 0.00
    stepPrice = 0.00
    chairPrice = 0.00
    couchPrice = 0.00
    sectionalPrice = 0.00
    roomCount = parseFloat(roomCount)
    quoteNum = Math.floor(Math.random() * (200 - 1 + 1)) + 1
    // Room Pricing
    if (roomCount == 2) {
        totalPrice = 125.00;
    } else if (roomCount == 3) {
        totalPrice = 148.00;
    } else if (roomCount == 4) {
        totalPrice = 188.00;
    } else if (roomCount == 5) {
        totalPrice = 233.75;
    } else if (roomCount == 6) {
        totalPrice = 279.00;
    } else if (roomCount == 7) {
        totalPrice = 323.75;
    } else if (roomCount == 8) {
        totalPrice = 366.00;
    } else if (roomCount > 9) {
        totalPrice = 45.00 * roomCount;
    }
    // Sectional : $279
    // Couch/Sofa : $179.00
    // Loveseat : $139.99
    // Kitchen Chair : $19.99
    // Lazy Boy $89.99
    totalPrice = totalPrice + (75.00 * parseFloat(flightsOfSteps)) + (parseFloat(chairCount) * 89.99) + (parseFloat(couchCount) * 179.00) + (parseFloat(sectionalCount) * 279.00);
    return [totalPrice, quoteNum];
}

export default quoteCalculator;