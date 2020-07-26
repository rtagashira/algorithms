// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

const reformatDate = (date) =>{
    let arr = date.split(' '),
        str = arr[2] + '-',
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    let month = (months.indexOf(arr[1]) + 1).toString()
    str += month.length === 1? '0' + month + '-': month + '-'
    let day = parseInt(arr[0]).toString()
    str += day.length === 1? '0' + day : day
    return str
}

console.log(reformatDate("20th Oct 2052"))//"2052-10-20"
console.log(reformatDate("6th Jun 1933"))//"1933-06-06"