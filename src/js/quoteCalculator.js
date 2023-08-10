
var totalPrice;
var quoteNum;
var stepPrice;
var upholsteryPrice;

function quoteCalculator(roomCount, flightsOfSteps, kitchenChairCount, ottomanCount, lazyBoyCount, loveseatCount, sofaCount, sectionalCount, deodorizer) {

    totalPrice = 0.00;
    stepPrice = 0.00;
    upholsteryPrice = 0.00;

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
    
    stepPrice = (57.99 * parseFloat(flightsOfSteps));
    upholsteryPrice = (parseFloat(lazyBoyCount) * 79.99) + (parseFloat(sofaCount) * 179.00) + 
                    (parseFloat(sectionalCount) * 279.00) + (parseFloat(ottomanCount) * 24.99)
                    + (parseFloat(loveseatCount) * 159.99) + (parseFloat(kitchenChairCount) * 24.99);
    totalPrice = totalPrice + stepPrice + upholsteryPrice;
    if (deodorizer) {
        totalPrice = totalPrice + 40.00;
    }

    return [totalPrice, quoteNum];
}

export default quoteCalculator;