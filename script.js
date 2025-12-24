// js array's

var strings = ["hello", "world", "this", "is", "a", "string", "array"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var booleans = [true, false, true, false, true];
var mixed = ["hello", 1, true, "world", 2, false];

var network = ['Jazz', 'Telenor', 'Zong', 'Ufone', 'Warid'];

console.log("String Array:", strings);



var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("qualifications:", qualifications   );


document.write("<h2>top 5 hit movies of 2020</h2>");
var movies = ["1. Avengers: Age of Ultron", "2. Black Panther", "3. Joker", "4. Frozen II", "5. Tenet"];

for (var i = 0; i < movies.length; i++) {
    document.write(movies[i] + "<br>");
}