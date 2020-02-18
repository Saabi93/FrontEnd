const tellFortune = function(jobTitle, geographicLocation, partnersName, numChildren) {
  let futureFortune = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnersName + ' with ' + numChildren + ' kids. ';
    
  console.log(futureFortune);
}
tellFortune('Astronaut', 'USA', 'Zoe', 2)
tellFortune('Film Director', 'France', 'Edith', 3)
tellFortune('Engineer', 'China', 'Zheng', 12)
