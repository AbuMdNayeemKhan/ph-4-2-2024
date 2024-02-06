// Task -1:
// Find the lowest number in the array below.
let heights2 = [11, 190, 120, 165, 137];

function lowNumber (para) {
    let lowNum = 0;
    for (const item of para) {
        if(lowNum < item){
            lowNum = item;
        }
    }
    return lowNum;
}

let print = lowNumber(heights2);

console.log(print);