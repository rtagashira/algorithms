// Address of a website often has the following form: <protocol>://<domain>.com[/<context>] where <protocol>, <domain> and <context> are non-empty strings consisting of lowercase English letters.
// Note that there may be no <context> part in an address.

// We need an algorithm that splits an address into an array of its parts: <protocol>, <domain> and <context> (if there is one).

const splitAddress = (a) => {
  let [proto, domainAndContext] = a.split('://'),
      domain                    = domainAndContext.split('.com')
  return domain[1]? [proto,domain[0],domain[1].slice(1)] : [proto,domain[0]]
}

const splitAddress = (a) => {
    let colon  = a.indexOf('://'),
        dotCom = a.indexOf('.com')
    return a[dotCom + 4]? [a.slice(0,colon),a.slice(colon+3,dotCom),a.slice(dotCom+5)] : [a.slice(0,colon),a.slice(colon+3,dotCom)]
}

const splitAddress = (a) => {
    let main = [...a.match(/\w+/),...a.match(/\w+(?=\.com)/)],
        end = a.match(/(?<=\.com\/)\w+/)
    return end? [...main,...end]: main
}

console.log(splitAddress("http://codesignal.com"))//["http", "codesignal"]
console.log(splitAddress("http://stackoverflow.com/questions"))//["http", "stackoverflow", "questions"]