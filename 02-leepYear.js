function isLeepYear (number){
    if(number % 4 === 0){
        return true;
    }
    return false;
}
const leep = isLeepYear(2100);
console.log(leep);                 //cl= true

function isLeepYear2 (number){
    if(number % 100 !== 0 && number % 4 === 0){
        return true;
    }
    else if(number % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leep2 = isLeepYear2(2100);
console.log(leep2);              //cl= false