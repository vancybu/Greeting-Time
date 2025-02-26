// 1. Create a new Date object
const currentDate = new Date();

// 2. Get the current hour
const getHours = currentDate.getHours();

// 3. Get the current minutes
const getMinutes = currentDate.getMinutes().toString().padStart(2, '0');

// 4. Get the current seconds
const getSeconds = currentDate.getSeconds().toString().padStart(2, '0');

// 5. Get the current year
const getFullYear = currentDate.getFullYear();

// 6. Create a variable to store the time
let time = `${getHours}:${getMinutes}:${getSeconds}`;

// Log the time to the console
console.log(time);

// 7. Determine the appropriate greeting based on the current hour
let greeting;
if (getHours < 12) {
    greeting = "Good Morning";
} else if (getHours < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

// 8. Select the h1 element
const heading = document.querySelector("h1");

// 9. Change the innerHTML of the h1 element to display the greeting
heading.innerHTML = greeting;

// 10. Create a variable to store the image URL
const img = "https://picsum.photos/200";

// 11. Select the image element
const image = document.querySelector("img");

// 12. Change the src attribute of the image element
image.src = img;

// 13. Select the p element with the class of copyright
const copyright = document.querySelector(".copyright");

// 14. Create a new span element
const year = document.createElement("span");

// 15. Set the innerHTML of the span element to the current year
year.innerHTML = getFullYear;

// 16. Append the span element to the p element
copyright.appendChild(year);


