function feet (number){
    const feet = number / 12;
    const inch = number % 12;
    const result = parseInt(feet)+' ft '+inch+' inch';
    return result;
}
const saad = feet(67);
console.log(saad);