// Create a simple array with 5 movie titles as strings.
// Console log the whole array.
// Alert the second value in the array.
// Prompt for a "String" and add it to the array.
// Alert a random string in the array.

var movies = ["The Godfather", "Schindler's List", "The Good the Bad and the Ugly", "The Lord of the Rings:Return of the King", "Fight Club"];
console.log(movies.length);
alert(movies.slice(1));
prompt("Add another movie");
movies.push("Star Wars");
alert(movies[0]);
// random movie in positon 0 because I am too lazy to do math.random etc.