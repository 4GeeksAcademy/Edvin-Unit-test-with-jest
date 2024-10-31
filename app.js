
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const dollarToEuro = (dollar) => {
    return (dollar/oneEuroIs["USD"]);
}

const yenToEuro = (yen) => {
    return (yen/oneEuroIs["JPY"]);
}

const fromEuroToDollar = (eur) => {
    let cambioDollar = eur * oneEuroIs["USD"];
    return cambioDollar;
}

const eurToYen = (eur) => {
    let cambioYen = eur * oneEuroIs["JPY"];
    return cambioYen;
}

const eurToGBP = (eur) => {
    let cambioGbp = eur * oneEuroIs["GBP"];
    return cambioGbp;
}

const fromDollarToYen = (dollar) => {
    let euros = dollarToEuro(dollar) ;
    let yen = eurToYen(euros);
    return yen;
}

const fromYenToPound = (yen) => {
    let euros = yenToEuro(yen) ;
    let pound = eurToGBP(euros);
    return pound;
}

module.exports = {fromEuroToDollar, eurToYen, eurToGBP,
     fromDollarToYen, dollarToEuro, yenToEuro, 
     fromYenToPound};