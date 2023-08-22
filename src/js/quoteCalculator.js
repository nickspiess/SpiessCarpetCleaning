
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
        totalPrice = 130.00;
    } else if (roomCount == 3) {
        totalPrice = 170.00;
    } else if (roomCount == 4) {
        totalPrice = 230.00;
    } else if (roomCount == 5) {
        totalPrice = 280.00;
    } else if (roomCount == 6) {
        totalPrice = 335.00;
    } else if (roomCount == 7) {
        totalPrice = 385.00;
    } else if (roomCount == 8) {
        totalPrice = 445.00;
    } else if (roomCount == 9) {
        totalPrice = 495.00;
    } else if (roomCount == 10) {
        totalPrice = 560.00;
    } else if (roomCount == 11) {
        totalPrice = 610.00;
    } else if (roomCount == 12) {
        totalPrice = 660.00;
    } else if (roomCount == 13) {
        totalPrice = 710.00;
    } else if (roomCount == 14) {
        totalPrice = 770.00;
    } else if (roomCount == 15) {
        totalPrice = 810.00;
    } else if (roomCount == 16) {
        totalPrice = 860.00;
    }
    
    stepPrice = (57.99 * parseFloat(flightsOfSteps));
    upholsteryPrice = (parseFloat(lazyBoyCount) * 60.00) + (parseFloat(sofaCount) * 130.00) + 
                    (parseFloat(sectionalCount) * 210.00) + (parseFloat(ottomanCount) * 15.00)
                    + (parseFloat(loveseatCount) * 89.99) + (parseFloat(kitchenChairCount) * 20.00);
    totalPrice = totalPrice + stepPrice + upholsteryPrice;
    if (deodorizer) {
        totalPrice = totalPrice + 40.00;
    }

    return [totalPrice, quoteNum];
}

export default quoteCalculator;