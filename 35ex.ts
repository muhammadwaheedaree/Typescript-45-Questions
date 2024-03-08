// ANIMALS
// List of animals with a common characteristic
let animals: string[] = ["dog", "cat", "rabbit"];

// Print out the name of each animal using a for loop
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
for (let animal of animals) {
    switch (animal) {
        case "dog":
            console.log("A dog would make a great pet.");
            break;
        case "cat":
            console.log("A cat would make a lovely companion.");
            break;
        case "rabbit":
            console.log("A rabbit is a cute and cuddly pet.");
            break;
        default:
            console.log("Unknown animal.");
    }
}

// Statement about the common characteristic
console.log("Any of these animals would make a great pet!");

