const Day =Date();
// console.log(Day); //cl= Tue Aug 06 2024 07:48:49 GMT+0600 (Bangladesh Standard Time)
const Day1 =new Date();
// console.log(Day1); //cl= 2024-08-06T01:50:01.472Z

const toDay =new Date('2024-07-21');
// console.log(toDay.getDate()); //cl= 21
// console.log(toDay.getMonth()); //cl= 6

const toDate =new Date(2024, 07, 21);
console.log(toDate); //cl= 2024-08-20T18:00:00.000Z
console.log(toDate.getDate()); //cl= 21
console.log(toDate.getMonth()); //cl= 7
toDate.setMonth(9);
console.log(toDate); //cl= 2024-10-20T18:00:00.000Z
console.log(toDate.toLocaleString('en-GB')); //cl= 21/10/2024, 00:00:00