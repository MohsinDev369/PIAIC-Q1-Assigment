// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = 'mohsin';
// printing the namer in lowercase
console.log(personName.toLowerCase());
// printing the namer in uppercase
console.log(personName.toUpperCase());
// printing the namer in titlecase
var personNameInTitlecase = personName.replace(personName[0], personName[0].toUpperCase());
console.log(personNameInTitlecase);
