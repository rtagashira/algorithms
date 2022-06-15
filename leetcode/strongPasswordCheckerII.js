// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

const strongPasswordCheckerII = (password) =>{
    let set = new Set()
    if(password.length < 8) return false
    for(let i=0;i<password.length;i++){
        let w = password[i]
        if(w === password[i+1]){
            return false
        }

        if(/[a-z A-Z]/.test(w)){
            if(w === w.toUpperCase()){
                set.add('u')
            }else if(w === w.toLowerCase()){
                set.add('l')
            }
        }else{
            if(/\d/.test(w)){
                set.add('d')
            }else{
                set.add('s')
            }
        }
    }
    return set.size === 4
}

console.log(strongPasswordCheckerII("IloveLe3tcode!"))//true
console.log(strongPasswordCheckerII("Me+You--IsMyDream"))//false
console.log(strongPasswordCheckerII(
    "zd!&1w!rod7&x+6t(c+^hb2+dgp$@40by0#l#7^v960f%(h8e@aw39jz2ml&5h!)s0^$jfqmwx9"))//false