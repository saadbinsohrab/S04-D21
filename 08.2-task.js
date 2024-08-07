// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5,7,6,11,7,12,98,7,5];

function find (numbers, found){
    const count = [];
    for(const number of numbers){
        if(found === number){
            count.push(number);
        }
    }
    return count.length;
}
const count = find(numbers, 7);
console.log(count);             //cl= 3
