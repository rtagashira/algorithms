// One of the thresholding operations applied to images is truncation. Consider each pixel of some image one by one. If the intensity of a pixel is higher than threshold then it is set to threshold. Otherwise, it isn't changed.

// Apply this operation to the given image.

let imageTruncation = (arr, threshold) => {
  for(let i in arr){
      arr[i] = arr[i].map(x=>x>=threshold?threshold:x)
  }
  return arr
}

console.log(imageTruncation(
  [[0, 100, 100], 
  [1, 255, 103]],102))//[[0, 100, 100],[1, 102, 102]]
console.log(imageTruncation(
  [[0,100,100], 
 [1,255,103]],0))//[[0,0,0], [0,0,0]]