//Checking Username:
// List of current users
var current_users = ["waheed", "faisal", "", "rahman", "Farman"];
// List of new users
var new_users = ["raheem", "waheed", "murad", "rahman", "farman"];
// Function to check if a username is available
function isUsernameAvailable(username) {
    return !current_users.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Check each new username
new_users.forEach(function (username) {
    if (isUsernameAvailable(username)) {
        console.log("The username '".concat(username, "' is available."));
    }
    else {
        console.log("The username '".concat(username, "' is already taken. Please enter a new username."));
    }
});
