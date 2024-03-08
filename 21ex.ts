
// Define types for the items:
type Item = {
    name: string;
    category: string;
    price: number;
};

// Function to create objects
function createObject(name: string, category: string, price: number): Item {
    return {
        name: name,
        category: category,
        price: price
    };
}

// Create objects containing items
const item1: Item = createObject("Laptop", "Electronics", 1200);
const item2: Item = createObject("Book", "Education", 20);
const item3: Item = createObject("T-shirt", "Clothing", 30);

// Display the objects
console.log(item1);
console.log(item2);
console.log(item3);
