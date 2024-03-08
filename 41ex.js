//Magicians:
// Define the function show_magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Create an array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function and pass the array of magician's names
show_magicians(magicianNames);
