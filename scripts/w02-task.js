/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

//Declare and instantiate a variable to hold your name
let fullName = "Linda Clark";

//Declare and instantiate a variable to hold the current year.
let currentYear = new Date(year);

//Declare and instantiate a variable to hold the file path (location) 
//and file name of the image that you placed in the images folder as a string.

const profilePicture ='images/photo.png';

/*Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */




