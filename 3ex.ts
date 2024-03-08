// Name Cases:
let PersonName: string = "waheed";

// lowercase
console.log("lowercase:", PersonName.toLowerCase());

// UPPER CASE
console.log("uppercase:", PersonName.toLocaleUpperCase());

// titlecase
console.log("titlecase:", PersonName.replace(/\b\w/g,(char)=>char.toUpperCase()));