// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

const numDifferentIntegers = (word) =>{
    let set = new Set()
    let temp = ''
    for(let i=0;i<word.length;i++){
        if(/[0-9]/.test(word[i])){
            if(temp === ''){
                temp += word[i]
            }else if(temp === '0'){
                temp = word[i]
            }else{
                temp += word[i]
            }
        }else{
            if(temp !== ''){
                set.add(temp)
            }
            temp = ''
        }
    }
    if(temp !== '') set.add(temp)
    return set.size
}

console.log(numDifferentIntegers("2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410"))
//3