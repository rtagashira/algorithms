// You have two version strings composed of several non-negative decimal fields that are separated by periods ("."). Both strings contain an equal number of numeric fields. Return 1 if the first version is higher than the second version, -1 if it is smaller, and 0 if the two versions are the same.

// The syntax follows the regular semver (semantic versioning) ordering rules:

// 1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
// < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0

const higherVersion2 = (ver1, ver2) =>{
    let split1 = ver1.split('.'),
        split2 = ver2.split('.')
    for(let i=0;i<split1.length;i++){
        if(+split1[i] > +split2[i]) return 1
        if(+split1[i] < +split2[i]) return -1
    }
    return 0
}

console.log(higherVersion2("1.2.2","1.2.0"))//1
console.log(higherVersion2("1.0.5","1.1.0"))//-1
console.log(higherVersion2("1.0.5","1.00.05"))//0
console.log(higherVersion2("1.0","1.10"))//-1