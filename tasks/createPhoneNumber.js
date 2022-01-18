// function createPhoneNumber(n){
//   let phoneNober = '('
//   for (let i = 0; i < 3; i++) {
//     phoneNober+= n[i]
//   }
//   phoneNober+=') '
//   for (let i = 3; i < 6; i++) {
//     phoneNober+= n[i]
//   }
//   phoneNober+='-'
//   for (let i = 6; i < 10; i++) {
//     phoneNober+= n[i]
//   }
  
//  return phoneNober
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



function createPhoneNumber(n){
    let phoneNober = '(xxx) xxx-xxxx'
    n.forEach(e => {
        phoneNober = phoneNober.replace('x',e)
    });
    return phoneNober
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));