//Checking Username:
// List of current users
const current_users: string[] = ["waheed", "faisal", "", "rahman", "Farman"];

// List of new users
const new_users: string[] = ["raheem", "waheed", "murad", "rahman", "farman"];

// Function to check if a username is available
function isUsernameAvailable(username: string): boolean {
    return !current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Check each new username
new_users.forEach(username => {
    if (isUsernameAvailable(username)) {
        console.log(`The username '${username}' is available.`);
    } else {
        console.log(`The username '${username}' is already taken. Please enter a new username.`);
    }
});
