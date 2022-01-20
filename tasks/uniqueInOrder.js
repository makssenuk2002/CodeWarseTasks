var uniqueInOrder=function(iterable){
    if (typeof(iterable) !== 'object'){
        iterable = iterable.split('')
    }
    let newArr =[]
    iterable.forEach((el,i) =>{
        if(iterable[i] !== iterable[i+1]){
            newArr.push(el)
        }
    })
    return newArr
}

console.log(uniqueInOrder([1,2,3,4,4]));