// ANIMALS
// List of animals with a common characteristic
var animals = ["dog", "cat", "rabbit"];
// Print out the name of each animal using a for loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
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
