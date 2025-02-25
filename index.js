// 1. Create a new Date object
const currentDate = new Date();

// 2. Get the current hour
let getHours = currentDate.getHours();

// 3. Get the current minutes
let getMinutes = currentDate.getMinutes();

// 4. Get the current seconds
let getSeconds = currentDate.getSeconds();

// 5. Get the current year
let getFullYear = currentDate.getFullYear();

// 5. Create a variable to store the time
let greeting = getHours + ":" + getMinutes + ":" + getSeconds;

//Log the time to the console
console.log(greeting);

// 6. Determine the appropriate greeting based on the current hour
if (getHours < 12) {
    greeting = "Good Morning";
} else if (getHours < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

// 7. Create a variable to store the image URL
const img = "https://picsum.photos/200";

// 8. Select the image element
const image = document.querySelector("img");

// 9. Change the src attribute of the image element
image.src = img;

// 10. Select the h1 element
const heading = document.querySelector("h1");

// 11. Change the innerHTML of the h1 element to display the greeting
heading.innerHTML = greeting;

// 12. Select the p element with the class of copyright
const copyright = document.querySelector(".copyright");

// 13. Create a new span element
const year = document.createElement("span");

// 14. Set the innerHTML of the span element to the current year
year.innerHTML = getFullYear;

// 15. Append the span element to the p element
copyright.appendChild(year);


