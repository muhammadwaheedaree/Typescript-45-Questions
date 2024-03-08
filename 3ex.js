// Name Cases:
var PersonName = "waheed";
// lowercase
console.log("lowercase:", PersonName.toLowerCase());
// UPPER CASE
console.log("uppercase:", PersonName.toLocaleUpperCase());
// titlecase
console.log("titlecase:", PersonName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
