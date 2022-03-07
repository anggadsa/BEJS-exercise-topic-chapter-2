let reverse = 0;
let num = 123451 % 10 *10;
let lastDigit;
// console.log(num)
// console.log(lastDigit = num %10)
while(num != 0){
    lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num/10);
}


console.log(reverse)
