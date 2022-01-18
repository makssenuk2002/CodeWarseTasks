function sortArray(array) {
    let newArr = []

    array.forEach((el, i) => {
        if(el%2 !== 0){
            newArr.push(el) 
        }
    })
    newArr.sort((a,b) => a-b) 
    console.log(newArr);
    array.forEach((el, i) => {
        if(el%2 === 0){
            newArr.splice(i,0,el) 
        }
    })
   return newArr
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));