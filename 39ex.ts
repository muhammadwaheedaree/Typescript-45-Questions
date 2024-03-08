//City Names:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Berlin", "Germany");

console.log(city1);
console.log(city2);
console.log(city3);
