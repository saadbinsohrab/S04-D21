// Task-3:
// Write a function to count the number of vowels in a string.
// t[i]==='a'||t[i]==='e'||t[i]==='i'||t[i]==='o'||t[i]==='u'
const sentence = 'Write A function to count the number Of vowels in A string.';
function vowels (t){
    const vow = ['a','e','i','o','u'];
    for(let i = 0; i < t.length; i++){
        if(vow.includes(t.toLowerCase()[i])){
            vow.push(t[i]);
        }
    }
    return vow.length - 5;
}
const get = vowels(sentence);
console.log(get);            //cl= 18
