const {dollarToEuro, eurToYen, eurToGBP, fromDollarToYen,
    fromYenToPound, fromEuroToDollar} = require('./app.js');

        let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    

test('10 euros deberian retornar 10*1.07 USD', () => {
    let resultUSD = fromEuroToDollar(10);
    expect(resultUSD).toBe(10*1.07);
})

test('10 euros deberian retornar 10*0.87 GBP', () => {
    let resultGBP = eurToGBP(10);
    expect(resultGBP).toBe(10*0.87);
})

test('10 euros deberian retornar 10*156.5 JPY', () => {
    let resultYen = eurToYen(10);
    expect(resultYen).toBe(10*156.5);
})

test('10 yenes deberian retornar (10 / 156.5)*0.87', () => {
    let resultYenToPound = fromYenToPound(10);
    let euros = 10/oneEuroIs["JPY"];
    let pound = euros*oneEuroIs["GBP"];
    expect(resultYenToPound).toBe(pound);
})

test('10 dolares deberian retornar (10 / 1.07)*156.5 JPY', () => {
    let resultDollarToYen = fromDollarToYen(10);
    let euros = 10/oneEuroIs["USD"];
    let yen = euros*oneEuroIs["JPY"];
    expect(resultDollarToYen).toBe(yen);
})




