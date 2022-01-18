function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let ans =''
    let obj = arr.reduce((acc , el) =>{
        acc[el] ? acc[el] += 1 : acc[el] = 1
        return acc
    },{})
    arr.forEach(el => {
        if(obj[el] === 1){
            ans += '('
        }else{
            ans += ')'
        }
    })
    return ans
}
console.log(duplicateEncode('din'));