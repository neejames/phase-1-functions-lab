function distanceFromHqInBlocks(someValue) {
    return (Math.abs(someValue - 42))
  }
  function distanceFromHqInFeet(someValue) {
   return (Math.abs(distanceFromHqInBlocks(someValue) * 264))
  }
  function distanceTravelledInFeet(start, destination) {
    return (Math.abs((destination - start) * 264))
  }
  function calculatesFarePrice(start, destination) {
    let distanceTravelled = Math.abs(destination - start);
    if (distanceTravelled * 264 <= 400) {
      console.log('free sample');
      return 0;
    }
    else if (400 < (distanceTravelled * 264) && (distanceTravelled * 264) <= 2000) {
      let price = ((distanceTravelled * 264)- 400) * .02;
      return price    
    }
    else if (2000 < (distanceTravelled * 264) && (distanceTravelled * 264) < 2500) {
            return 25
    }
    else if ((distanceTravelled * 264) >= 2500) {
      return 'cannot travel that far'
    }
  }