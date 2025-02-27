// Function to update the time and greeting
function updateTime() {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current hour
  const getHours = currentDate.getHours();

  // Get the current minutes
  const getMinutes = currentDate.getMinutes().toString().padStart(2, "0");

  // Get the current seconds
  const getSeconds = currentDate.getSeconds().toString().padStart(2, "0");

  // Get the current year
  const getFullYear = currentDate.getFullYear();

  // Create a variable to store the formatted time
  let time = `${getHours}:${getMinutes}:${getSeconds}`;

  // Log the time to the console
  console.log(time);

  // Determine the appropriate greeting based on the current hour
  let greeting;
  let color;
  let quote;

  if (getHours < 12) {
    greeting = "Good Morning";
    color = "#22fb33cd";
    quote = "The early bird catches the worm";
  } else if (getHours < 18) {
    greeting = "Good Afternoon";
    color = "#1f22fb";
    quote = "It's always darkest before the dawn";
  } else {
    greeting = "Good Evening";
    color = "#f00";
    quote = "The night is darkest just before the dawn";
  }

  // Select the h1 element
  const heading = document.querySelector("h1");

  // Change the innerHTML of the h1 element to display the greeting
  heading.innerHTML = greeting;

  // Change the color of the h1 element based on the greeting
  heading.style.color = color;

  // Select the p element with the class of quote
  const quoteElement = document.querySelector(".quote");

  // Change the innerHTML of the p element to display the quote
  quoteElement.innerHTML = quote;

  // Select the p element with the class of copyright
  const copyright = document.querySelector(".copyright");

  // Create a new span element
  const year = document.createElement("span");

  // Set the innerHTML of the span element to the current year
  year.innerHTML = getFullYear;

  // Append the span element to the p element
  copyright.appendChild(year);
}

console.log(updateTime());

// Function to update the image based on the current seconds
function updateImages() {
  const currentDate = new Date();
  const getSeconds = currentDate.getSeconds();
  console.log(getSeconds);

  let slide;

  if (getSeconds < 10) {
    slide = "/FRONTEND DEVELOPMENT/SLIDES/Image Folder/cubes-2492010_1280.jpg";
  } else if (getSeconds < 20) {
    slide = "/FRONTEND DEVELOPMENT/SLIDES/Image Folder/keyboard-5017973_1280.jpg";
  } else if (getSeconds < 30) {
    slide = "/FRONTEND DEVELOPMENT/SLIDES/Image Folder/light-bulb-4314993_1280.jpg";
  } else if (getSeconds < 40) {
    slide = "/FRONTEND DEVELOPMENT/SLIDES/Image Folder/light-bulbs-1603766_1280.jpg";
  } else if (getSeconds < 50) {
    slide = "/FRONTEND DEVELOPMENT/SLIDES/Image Folder/smoke-4988507_1280.jpg";
  } else {
    slide = "/FRONTEND DEVELOPMENT/JAVASCRIPT+TIME/Image Folder/pexels-danielabsi-952670.jpg";
  }

  // Select the image element
  const image = document.querySelector("img");
  image.src = slide;
}

// Call the updateTime function every second
setInterval(updateImages, 1000);
