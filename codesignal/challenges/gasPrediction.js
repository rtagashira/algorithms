// Uber is introducing a new feature for drivers that tells them if they'll need gas within the next hour. It analyzes all of the drive distances (in miles) that the driver has traveled in the past 12 hours to make the recommendation.

// Given the current gas level (in gallons), the drive data, and the average mileage of the vehicle, calculate the average amount of gas spent per hour and return true if the driver is likely to need a refill in the next hour, false otherwise.

// Assume that the driver will need more gas if the average gas consumption per hour is greater than the amount of gas they have at the given moment. The average mileage is measured in miles per gallon and it shows how many miles a vehicle can travel on one gallon of gas.

const gasPrediction = (driveDistances, currentGasLevel, avgMileage) =>{
    const sum = (a) => a.reduce((p,n)=>p + n),
          gph = sum(driveDistances)/12/avgMileage
    return gph > currentGasLevel
}

console.log(gasPrediction([12, 6, 17, 5, 20],0.25,25))//false
console.log(gasPrediction([120],0.5,10))//true
console.log(gasPrediction([10, 20, 30, 90, 40, 50],10,1.9))//true