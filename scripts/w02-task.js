/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Linda Clark";

let currentYear = new Date(year);

let profilePicture = `images/photo.png`;

/*Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFood = ["Chicken Tenders", "Fried Rice", "Banana Cake"];

foodElement.textContent = favFood;

let favFood2 = ["Grilled Tuna Sandwich"];

favFood.push(favFood2);

foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();

foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood}`;