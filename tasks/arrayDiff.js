// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        const element1 = b[i];
        for (let j = 0; j < a.length; j++) {
            const element2 = a[j];
                if(element2 === element1){
                    a.splice(j,1)
                    j--
                }
        }
    }
  return a
}

console.log(arrayDiff([1,2,2],[2]));



