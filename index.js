// 1. Create a new Date object
const currentDate = new Date();

// 2. Get the current hour
const getHours = currentDate.getHours();

// 3. Get the current minutes
const getMinutes = currentDate.getMinutes().toString().padStart(2, "0");

// 4. Get the current seconds
const getSeconds = currentDate.getSeconds().toString().padStart(2, "0");

// 5. Get the current year
const getFullYear = currentDate.getFullYear();

// 6. Create a variable to store the time
let time = `${getHours}:${getMinutes}:${getSeconds}`;

// Log the time to the console
console.log(time);

// 7. Determine the appropriate greeting based on the current hour
let greeting;
let color;
let quote;

if (getHours < 12) {
  greeting = "Good Morning";
  color = "#22fb33cd ";
  quote = "The early bird catches the worm";

} else if (getHours < 18) {
  greeting = "Good Afternoon";
  color = "#1f22fb";
  quote = "It's always darkest before the dawn";
  
} else {
  greeting = "Good Evening";
  color = "#fb1122";
  quote = "The night is darkest just before the dawn";
}

// 8. Select the h1 element
const heading = document.querySelector("h1");

// 9. Change the innerHTML of the h1 element to display the greeting
heading.innerHTML = greeting;

// 10. Change the color of the h1 element based on the greeting
heading.style.color = color;

// 11. Select the p element with the class of time
const quoteElement = document.querySelector(".quote");

// 12. Change the innerHTML of the p element to display the time
quoteElement.innerHTML = quote;

// 11. Create a variable to store the image URL
const img = "https://picsum.photos/200";

// 12. Select the image element
const image = document.querySelector("img");

// 13. Change the src attribute of the image element
image.src = img;

// 14. Select the p element with the class of copyright
const copyright = document.querySelector(".copyright");

// 15. Create a new span element
const year = document.createElement("span");

// 16. Set the innerHTML of the span element to the current year
year.innerHTML = getFullYear;

// 17. Append the span element to the p element
copyright.appendChild(year);
