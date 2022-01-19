function encrypt(text, n) {
    if (text === null) {
        return text
    }
    if (text.length === 0 || n < 0) {
        return text
    }
    for (let index = 0; index < n; index++) {
        let odd = text.split('').filter((el, i) => i % 2 !== 0).join('')
        let even = text.split('').filter((el, i) => i % 2 === 0).join('')
        text = odd + even
    }
    return text
}
console.log(encrypt("012345", 1));


function decrypt(encryptedText, n) {
    if (encryptedText === null) {
        return encryptedText
    }
    if (encryptedText.length === 0 || n < 0) {
        return encryptedText
    }
    for (let index = 0; index < n; index++) {
        let arr = encryptedText.split('')

        let add = arr.slice(0, arr.length / 2)
        let even = arr.slice(arr.length / 2, arr.length)

        let count = 0
        for (let i = 0; i < encryptedText.length; i++) {
            if (i % 2 !== 0) {
                even.splice(i, 0, add[count])
                count++
            }
        }
        encryptedText = even.join('')

    }
    return encryptedText
}

console.log(decrypt("012345", 1));
