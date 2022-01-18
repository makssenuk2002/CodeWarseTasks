function findOdd(a) {
    let obj = a.reduce((acc,el) =>{
        acc[el] ? acc[el] += 1 : acc[el] = 1
        return acc
    },{})
    for(let key in obj){
        if(obj[key] % 2 !== 0){
            return +key
        }
    }
    
}
console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));