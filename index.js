// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-42)
}

function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue) * 264)
    
}

function distanceTravelledInFeet(start, destination) {
    let distance = start - destination
    distance = Math.abs(distance) * 264
    return distance
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = start - destination
    if(distance<400) {
        return 'no fee'
    } else if (distance<2000) {
        return 2*cent
    } else if (distance<2500) {
        return '$25'
    } else return 'cannot travel that far'
}