
var totalPrice;
var quoteNum;
var stepPrice;
var chairPrice;
var couchPrice;
var sectionalPrice;

function quoteCalculator(roomCount, flightOfSteps, chairCount, couchCount, sectionalCount) {
    totalPrice = 0.00
    stepPrice = 0.00
    chairPrice = 0.00
    couchPrice = 0.00
    sectionalPrice = 0.00
    roomCount = parseFloat(roomCount)
    quoteNum = Math.floor(Math.random() * (200 - 1 + 1)) + 1
    // Room Pricing
    if (roomCount == 2 || roomCount == 1) {
        totalPrice = 169.99;
    } else if (roomCount == 3) {
        totalPrice = 224.99;
    } else if (roomCount == 4) {
        totalPrice = 281.99;
    } else if (roomCount == 5) {
        totalPrice = 337.99;
    } else if (roomCount == 6) {
        totalPrice = 394.99;
    } else if (roomCount == 7) {
        totalPrice = 449.99;
    } else if (roomCount == 8) {
        totalPrice = 506.99;
    } else if (roomCount == 8) {
        totalPrice = 506.99;
    } else if (roomCount == 9) {
        totalPrice = 560.99;
    } else if (roomCount == 10) {
        totalPrice = 618.99;
    }
    // Sectional : $279
    // Couch/Sofa : $179.00
    // Loveseat : $139.99
    // Kitchen Chair : $19.99
    // Lazy Boy $89.99
    totalPrice = totalPrice + (57.99 * parseFloat(flightOfSteps)) + (parseFloat(chairCount) * 89.99) + (parseFloat(couchCount) * 179.00) + (parseFloat(sectionalCount) * 279.00);
    return [totalPrice, quoteNum];
}

export default quoteCalculator;