// const nums3 = [55, 14, 87, 6, 92, 3, 17, 22, 63];
// function odd_averase3 (numbers){
//     let w = 0;
//     const odds = [];
//     while(w < numbers.length){
//         if(numbers[w] % 2 === 1){
//             odds.push(numbers[w]);
//         }
//         w++;
//     }
//     let ww = 0;
//     let sum = 0;
//     while(ww < odds.length){
//         sum = sum + odds[ww];
//         ww++
//     }
//     const result = sum / odds.length;
//     return result;
// }
// const oddAv3 = odd_averase3(nums3);
// console.log(oddAv3);               //cl= 45


// const nums2 = [55, 14, 87, 6, 92, 3, 17, 22, 63];
// function odd_averase2 (numbers){
//     const odds = [];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 1){
//             odds.push(numbers[i]);
//         }
//     }
//     let sum = 0;
//     for(let i = 0; i < odds.length; i++){
//         sum = sum+odds[i];
//     }
//     const result = sum / odds.length;
//     return result;
// }
// const oddAv2 = odd_averase2(nums2);
// console.log(oddAv2);               //cl= 45


const nums = [55, 14, 87, 6, 92, 3, 17, 22, 63];
function odd_averase (numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 !==0 ){
            odds.push(number)
        }
    }
    let sum = 0;
    for(const odd of odds){
        sum = sum + odd;
    }
    const result = sum / odds.length;
    return result;
}
const oddAv = odd_averase(nums);
console.log(oddAv);               //cl= 45
