// shrinking guest listS
var guests = ["rahman", "murad", "farman", "waheed", "faisal", "raheem"];
var messageSmallTable = "Unfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.";
// Print the message about the small dinner table
console.log(messageSmallTable);
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}
// Print invitation messages to the remaining two guests
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you're still invited to dinner. It would be an honor to have you join us.");
}
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list to confirm
console.log("Updated guest list: " + guests);
