const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
  
const spaceship1 = {
    homePlanet : 'Earth',
    color : 'blue'
  };


  let paintIt = (obj) => {
    obj.color = 'glorious gold'
  };

  function paintIt(obj){
    obj.color = 'glorious gold'
  }

  
  paintIt(spaceship);
  paintIt(spaceship1);

let add = (a) => {
    return a+a
}

add(1)

  spaceship.color // Returns 'glorious gold'
  spaceship1.color 

  ///////////////////////
  let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };

  let tryReassignment = (obj) => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
  
  };
  tryReassignment(spaceship) // The attempt at reassignment does not work.
  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
  
  spaceship = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.


  let spaceshipss = {
    homePlanet : 'Earth',
    color : 'red'
  };

  spaceshipss.identified=false