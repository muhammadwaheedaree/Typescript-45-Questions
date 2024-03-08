// Function to create objects
function createObject(name, category, price) {
    return {
        name: name,
        category: category,
        price: price
    };
}
// Create objects containing items
var item1 = createObject("Laptop", "Electronics", 1200);
var item2 = createObject("Book", "Education", 20);
var item3 = createObject("T-shirt", "Clothing", 30);
// Display the objects
console.log(item1);
console.log(item2);
console.log(item3);
