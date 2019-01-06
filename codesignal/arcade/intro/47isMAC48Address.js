// A media access control address (MAC address) is a unique identifier assigned to network interfaces 
// for communications on the physical network segment.

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups 
// of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

function isMAC48Address2(str) {
  let arr = str.split('-')
  if(str[0]==='-'||str[str.length-1]==='-'){
    return false
  }
  for(let el of arr){
    if(el.length!=2){
      return false
    }
    else if(el.match(/[^0-9A-F]/)){
      return false
    }
  }
  return true
}
//-------------------------------------------------------------
function isMAC48Address(s){
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(s)
}

console.log(isMAC48Address("00-1B-63-84-45-E6"));//true
console.log(isMAC48Address("Z1-1B-63-84-45-E6"));//false
console.log(isMAC48Address("not a MAC-48 address"));//false
console.log(isMAC48Address("02-03-04-05-06-07-"));//false
console.log(isMAC48Address("12-34-56-78-9A-BG"));//false