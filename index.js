// Code your solution in this file!
const drivers = ['driver1','driver2', 'driver3', 'driver4'];

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return function(){
    return integer * integer;
  }
}

const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3

const selectDifferentDrivers = (arryOfDrivers,returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arryOfDrivers);
}

