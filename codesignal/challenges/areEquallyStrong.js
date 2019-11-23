// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

let areEquallyStrong = (yL, yR, fL, fR) => Math.max(yL,yR) === Math.max(fL,fR) && Math.min(yL,yR) === Math.min(fL,fR)

console.log(areEquallyStrong(10,15,15,10))//true
console.log(areEquallyStrong(15,10,15,10))//true
console.log(areEquallyStrong(15,10,15,9))//false