// changing guests list:
var guests = ["haji", "murad", "waheed"];
var unableToAttend = "haji";
var newGuest = "faisal";
var dinnerInvitation = "Dear ";
// Printing dinner invitations to each guest
for (var i = 0; i < guests.length; i++) {
    console.log(dinnerInvitation + guests[i] + ", I would like to invite you to dinner. It would be an honor to have you join us.");
}
// Print the name of the guest who can't make it
console.log(unableToAttend + " can't make it to the dinner.");
// Replace the guest who can't make it with the new guest
var indexOfUnableToAttend = guests.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests[indexOfUnableToAttend] = newGuest;
}
// Printing second set of dinner invitations to each remaining guest
for (var i = 0; i < guests.length; i++) {
    console.log(dinnerInvitation + guests[i] + ", I would like to invite you to dinner. It would be an honor to have you join us.");
}
