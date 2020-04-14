// For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

// 1. The area of the rectangular web page you designed must equal to the given target area.

// 2. The width W should not be larger than the length L, which means L >= W.

// 3. The difference between length L and width W should be as small as possible.
// You need to output the length L and the width W of the web page you designed in sequence.

const constructRectangle = (area) =>{
    let arr = [],
        diff = area
    
    for(let i=1;i<=area;i++){
        let l = i,
            w = Math.floor(area/l)
        if(l * w === area && l >= w && l - w <= diff){
            diff = l - w
            arr = [l,w]
        }
    }
    return arr
}

console.log(constructRectangle(4))//[2,2]
console.log(constructRectangle(3))//[3,1]