//Cars:
// Define the interface for additional car information
interface AdditionalInfo {
    [key: string]: string;
  }
  
  // Function to create a car object with color and feature
  function createCar(manufacturer: string, model: string, additionalInfo: AdditionalInfo): object {
    // Create a new car object
    const car: { manufacturer: string; model: string } = {
      manufacturer,
      model,
    };
  
    // Spread the additional information onto the car object
    return { ...car, ...additionalInfo };
  }
  
  // Example usage
  const car = createCar("Tesla", "Model 2024", {
    color: "red",
    feature: "autopilot",
  });
  
  // Print the car object to the console, showing color and feature
  console.log(car);