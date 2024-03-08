// More guests
var guests = ["murad", "waheed", "faisal"];
var biggertablemessege = "Good news! i found a bigger dinner table. ";
// add one new guest of the biggning of the array
guests.unshift("ranman");
// add one new guest to middle of the array
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "farman");
// add one new guest to end of the array
guests.push("raheem");
// print a new set of invitation messege
for (var i = 0; i < guests.length; i++) {
    console.log("dear" + guests[i] + ",i would like to invite you to dinner. it would be an honor to have you join us.");
}
console.log(biggertablemessege);
