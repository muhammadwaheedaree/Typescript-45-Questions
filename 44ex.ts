//Sandwitch:
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different number of arguments
makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");
