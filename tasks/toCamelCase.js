function toCamelCase(str){
    let ans = ''
    for(let i = 0 ; i< str.length ; i++){
      if(str[i] === '-' || str[i] === '_' ){
       ans += str[i+1].toUpperCase()
       i++
      }else{
        ans += str[i]
      }
    }
    return ans
 }
 console.log(toCamelCase("the_stealth_warrior"));