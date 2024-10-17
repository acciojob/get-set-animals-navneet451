//complete this code
// Class definition for Animal
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound the animal makes
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Subclass Cat that extends Animal
class Cat extends Animal {
    // Method to log the sound "purr"
    purr() {
        console.log("purr");
    }
}

// Subclass Dog that extends Animal
class Dog extends Animal {
    // Method to log the sound "woof"
    bark() {
        console.log("woof");
    }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
