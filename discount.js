// upto 100 ----> 100/-
// more than 101 -- 200 ----> 90
//more than 200 ----> 70

let ticketPrice = 411;
function discount (tp) {
    if(tp <= 100){
        return ('100 tk par ticket');
    } else if (tp <= 200){
        return ('90 tk par ticket');
    } else if (tp > 200){
        return('70 tk each ticket');
    }
}
let print = discount(ticketPrice);
console.log(print);