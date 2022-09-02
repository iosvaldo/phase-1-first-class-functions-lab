// Code your solution in this file!

const drivers = ["d1", "d2", "d3", "d4", "d5"];

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) =>{
  return function () {
    return integer * integer;
  }
}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arrayOfDrivers);
};