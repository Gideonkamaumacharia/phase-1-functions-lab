// // Code your solution in this file!
// function distanceFromHqInBlocks(someValue) {
//     let headquarter = 42

//     if(someValue < headquarter) {
//         let difference = console.log(headquarter - someValue)
//     }

//     return difference

   
    
// }

// function distanceFromHqInFeet(someValue) {
//     distanceFromHqInBlocks(someValue)
// }

// function distanceTravelledInFeet(start, destination) {}

// function calculateFarePrice(start, destination) {
    
// }
// //distanceFromHqInBlocks(43)
// distanceFromHqInBlocks(34)

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); 
  }

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264; 
  } 

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
    }

function calculatesFarePrice(start, destination) {
     const distance = distanceTravelledInFeet(start, destination);
          
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
       return 25;
    } else {
        return 'cannot travel that far';
        }
        }