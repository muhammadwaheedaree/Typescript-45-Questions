//Seing the World: 
let placesToVisit: string[] = ["USA", "Dubai", "China", "Saudia", "Iran"];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying the list):");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order (without modifying the list):");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal order after reverse sorting:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nOriginal order after double reversal:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
