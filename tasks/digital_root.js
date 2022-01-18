// function digital_root(n) {
//     while(n > 9){
//         let arr = n.toString().split('')
//         n = 0
//         arr.forEach(el => n += +el)
//     }
//     return n
// }
digital_root = (n)  => (n  % 9)
console.log(digital_root(493193  ));