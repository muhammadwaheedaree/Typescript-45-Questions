//Hello admin:
const usernames: string[] = ["admin", "waheed", "faisal", "rahman"];

for (const username of usernames) {
  if (username === "admin") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
