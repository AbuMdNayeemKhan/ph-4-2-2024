//shopping card

let buy = [
    {name : "shampu", price : 300, quantity : 1},
    {name : "churi", price : 30, quantity : 4},
    {name : "chiruni", price : 20, quantity : 200},
    {name : "shari", price : 3000, quantity : 2},
    {name : "shouse", price : 300, quantity : 2},
    {name : "goyna", price : 10000, quantity : 3},
];

function totalPrice(items){
    let result = 0;
    for (const item of items){
        result = item.price * item.quantity;
    }
    return result;
}

let print = totalPrice(buy);

console.log(print);