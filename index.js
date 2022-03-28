// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
   if (someValue > 42) {
   return(someValue - 42)
  } else if (someValue < 42) {
    return(42 - someValue)
  }
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue); 
  return (blocks * 264)

}

function distanceTravelledInFeet(start, destination) {
    // returns the number of feet traveled
    if (start < destination) {
        return(destination - start) * 264
    } else if(start>destination) {
        return(start - destination) * 264
    }
}
  

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return(.02 * (distance - 400))
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return ("cannot travel that far")
    }

    }
    
    
    
