// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching name and value pairs 
// (second argument). Each name and value pair of the source object has to be 
// present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
	let arr = []
	const sourceKeysArr = Object.keys(source)
	let keyMatches = 0
	const keyTotal = sourceKeysArr.length

	for(let obj of collection){
		keyMatches = 0
		for(let i in sourceKeysArr){
			if(obj[sourceKeysArr[i]] === source[sourceKeysArr[i]]){
				keyMatches ++
				if(keyMatches === keyTotal){
					arr.push(obj)
				}
			}
		}
	}

	return arr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first:'Romeo' }))
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first:'Romeo', last:'Capulet' }))