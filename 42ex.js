//Greate Magicians:
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
    return;
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
makeGreat(magicians);
showMagicians(magicians);
