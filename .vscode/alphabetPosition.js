function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    text = text.toLowerCase().split('')
    let ans = ''

    for (let i = 0; i < text.length; i++) {
        let letter = text[i] 
        for (let j = 0; j < alpha.length; j++) {
            if(alpha[j] === letter){
                ans += j+1 + ' '
            }
        }
    }
    return ans.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));