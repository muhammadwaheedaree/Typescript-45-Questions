//Greate Magicians:
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
    return;
  }
  
  function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  makeGreat(magicians);
  showMagicians(magicians);
  
