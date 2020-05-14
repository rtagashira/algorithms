// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

const subdomainVisits = (arr) =>{
    let obj = {},
        a   = []
    for(let el of arr){
        let count = +el.match(/[0-9]+/)
        let domainArr = el.split(' ')[1].split('.')
        let temp = ''
        for(let i = domainArr.length - 1;i>=0;i--){
            if(temp === ''){
                temp = domainArr[i]
                obj[temp]? obj[temp] += count : obj[temp] = count
            }else{
                temp = domainArr[i] + '.' + temp
                obj[temp]? obj[temp] += count : obj[temp] = count
            }
        }
    }
    for(let key in obj){
        a.push(obj[key] + ' ' + key)
    }
    return a
}

console.log(subdomainVisits(
    ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))
//["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]