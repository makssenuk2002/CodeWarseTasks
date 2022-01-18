function domainName(url){
    let arr = url.split('http://').join('')
    arr = arr.split('https://').join('')
    arr = arr.split('www.').join('')
    arr = arr.split('.').filter((el,i) => i === 0).join('')
    return arr
}
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));