let phones = [
    { name : "iphone", price : 100000, origin: 'usa'},
    { name : "motorola", price : 80000, origin: 'usa'},
    { name : "oppo", price : 39000, origin: 'china'},
    { name : "sony", price : 88000, origin: 'japan'},
    { name : "xioumi", price : 22000, origin: 'china'},
    { name : "vivo", price : 33000, origin: 'china'},
    { name : "walton", price : 20000, origin: 'bangladesh'},
];
function lowPricePhone(phones){
    let lpp = phones[0];
    for (let data of phones) {
        if (lpp.price > data.price) {
            lpp = data;
        }
    }
    return lpp;
}
console.log(lowPricePhone(phones));