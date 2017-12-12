/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;

var category =
    
    //the animal eats plants and not other animals? If yes, it's an herbivore! If not...
    (eatsPlants && !eatsAnimals)? "herbivore" :
    
    //the animal doesn't eat plants but eats other animals? If yes, it's a carnivore! If not...
    (!eatsPlants && eatsAnimals)? "carnivore" :
    
    //the animal eats both plants AND other animals? If yes, it's an omnivore!
    // If not, the animal doesn't belong to any of the categories (Maybe it's an alien??).
    (eatsPlants && eatsAnimals)? "omnivore": undefined;
                
// print the output assigned to category after running the if...else conditional statement      
// which will be one of the following:
// * herbivore
// * carnivore
// * omnivore
// * undefined
console.log(category); 
