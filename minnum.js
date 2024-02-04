//print min number by using function

let numbers = [12, 46, 80, 98, 55, 43, 56, 76];

function findMin(num){
    let minNumber = numbers[0];
    for(data of num){
        if(minNumber > data){
            minNumber = data;
        }
    }
    return minNumber;
}
console.log(findMin(numbers));