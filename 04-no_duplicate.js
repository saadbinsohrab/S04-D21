const friends = ['aziz', 'firoz', 'sahriar', 'firoz', 'bodiar','aziz', 'sakib'];
function no_duplicate(arys){
    const result = [];
    for(const ary of arys){
        // console.log(ary);
        if(result.includes(ary) === false){
            result.push(ary);
        }
    }
    return result;
}
const duplicate = no_duplicate(friends);
console.log(duplicate);   //cl= [ 'aziz', 'firoz', 'sahriar', 'bodiar', 'sakib' ]
