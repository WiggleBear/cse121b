/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Linda Clark";
const currentYear = new Date().getFullYear();
const profilePicture = "images/photo.png";

/*Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear.toString();
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

const favFoods = ["Asian Food"," Seafood"," Steak"," Lamb"," Stinky Tofu"];
foodElement.innerHTML += favFoods;
const newFavFoods = " Sushi";
favFoods.push(newFavFoods);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift(favFoods);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop(favFoods);
foodElement.innerHTML += `<br>${favFoods}`;