// Function to update the time and greeting
function updateTime() {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current hour
  const getHours = currentDate.getHours();

  // Get the current year
  const getFullYear = currentDate.getFullYear();

  // Determine the appropriate greeting based on the current hour
  let greeting;
  let color;
  let quote;

  if (getHours < 12) {
    greeting = "Good Morning";
    color = "#C14600";
    quote = "The early bird catches the worm";
  } else if (getHours < 18) {
    greeting = "Good Afternoon";
    color = "#F2E2B1";
    quote = "It's always darkest before the dawn";
  } else {
    greeting = "Good Evening";
    color = "#690B22";
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

  const arrImages = [
    "Image Folder/1.jpg",
    "Image Folder/2.jpg",
    "Image Folder/3.jpg",
    "Image Folder/4.jpg",
    "Image Folder/5.jpg",
    "Image Folder/6.jpg",
  ];

  const number = Math.floor(Math.random() * arrImages.length);

  document.querySelector("img").src = arrImages[number];
}

// Call the updateTime function every second
setInterval(updateImages, 3000);


