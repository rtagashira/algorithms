// An IP address is a numerical label assigned to each device(e.g., computer, printer) 
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses.
// One of them is the IPv4 address.

// IPv4 addresses are represented in dot - decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.

// Given a string, find out if it satisfies the IPv4 address naming rules.

//   Example

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.

// 316 is not in range[0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.

// There is no first number.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] string inputString

// A string consisting of digits, full stops and lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 30.

// [output] boolean

// true if inputString satisfies the IPv4 address naming rules, false otherwise.

function isIPv4Address(str) {
  let strArr = str.split('.')
  if(strArr.length!=4){
    return false
  }
  for(let string of strArr){
    if (string===''||string.match(/[^0-9]/)||+string<0||+string>255){
      return false
    }
  }
  return true
}

function isIPv4Address2(s) {
  var r = s.split(".")
  return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
}

console.log(isIPv4Address("172.16.254.1"))//true
console.log(isIPv4Address("172.316.254.1"))//false
console.log(isIPv4Address(".254.255.0"))//false
console.log(isIPv4Address("1.1.1.1a"))//false