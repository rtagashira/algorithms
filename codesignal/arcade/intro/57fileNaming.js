// You are given an array of desired filenames in the order of their creation. Since two files cannot 
// have equal names, the one which comes later will have an addition to its name in a form of (k), 
// where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.


function fileNaming(names) {
    let arr = []
    for(let i=0;i<names.length;i++){                    
      if(arr.indexOf(names[i])<0){          // no dups = put string in final array
        arr.push(names[i])
      }else{
        let j = 1
        while(arr.indexOf(names[i]+'('+ j +')')>=0){ //while loop to figure out what number to add on to dups
          j++
        }
        if(arr.indexOf(names[i]+'('+j+')')<0){
          arr.push(names[i]+'('+j+')')
        }else{
          arr.push(names[i]+'('+j+')'+'('+1+')')
        }
      }
    }
    return arr
}

console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))
                                                                  //["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]
console.log(fileNaming(["dd", "dd(1)", "dd(2)", "dd", "dd(1)", "dd(1)(2)", "dd(1)(1)", "dd", "dd(1)"]))
                                                                                                        //["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"]
                                                                                                        