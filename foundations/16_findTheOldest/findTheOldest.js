const findTheOldest = function(arr) {
    arr.forEach((person) => {
      const currentYear = new Date().getFullYear();
      if (!person.yearOfDeath) {
        person.age = (currentYear - person.yearOfBirth)
      } else {
        person.age = (person.yearOfDeath -
                      person.yearOfBirth)
        
      }

  });
  const maxAge = Math.max(...arr.map(person => person.age));
  const oldestPerson = arr.filter(person => person.age === maxAge);
  // return console.log(maxAge);
  return oldestPerson[0];
    

};

// Do not edit below this line
module.exports = findTheOldest;
