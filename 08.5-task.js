// Task-5:
// Generate a random number between 10 to 20.

function random(){

    while(1<2){
        const Gen_num = Math.round(Math.random()*100); 
        if(Gen_num >10 && Gen_num<20){
            return Gen_num;
        }
    }
}
const number =random();
console.log(number);