var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function to create a car object with color and feature
function createCar(manufacturer, model, additionalInfo) {
    // Create a new car object
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Spread the additional information onto the car object
    return __assign(__assign({}, car), additionalInfo);
}
// Example usage
var car = createCar("Tesla", "Model 2024", {
    color: "red",
    feature: "autopilot",
});
// Print the car object to the console, showing color and feature
console.log(car);
