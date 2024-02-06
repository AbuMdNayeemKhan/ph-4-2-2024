// Find the friend with the smallest name.
let names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function chotoNam(para){
    let lowName = para[0];
    for (let item of para) {
        if(item.length < lowName.length){
            lowName = item;
        }
    }
    return lowName;
}
let print = chotoNam(names);
console.log(print);