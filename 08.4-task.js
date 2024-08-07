// Task-4:
// Write a function to find the longest word in a given string.

const para = 'I am learning Programming to become a programmer';
function long_word (text){
    const sentence = text.split(' ');
    let lenth = 0;
    let large = 0;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i].length > lenth){
            lenth = sentence[i].length;
            large= sentence[i];
        }
    }
    return large;
}
const lW =long_word(para);
console.log(lW);           //cl= Programming


function saad(t){
    const sentence =t.split(' ');
    let lenth = 0;
    let large = 0;
    for(const word of sentence){
        if(word.length > lenth){
            lenth = word.length;
            large = word;
        }
    }
    return large;
}
const output = saad(sentence);
console.log(output);           //cl= Programming