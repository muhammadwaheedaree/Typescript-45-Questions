//Sandwitch:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different number of arguments
makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");
