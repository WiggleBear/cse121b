/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Linda Clark",
    photo: "images/photo.png",
    favoriteFoods: [
        "Asian Food",
        "Seafood",
        "Steak",
        "Lamb",
        "Stinky Tofu",
        "Sushi"
    ],
    hobbies: [
        "Building Lego",
        "Reading books",
        "Watching movies",
        "Listening to podcast"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: "Taipei, Taiwan", length: "16 years"});
myProfile.placesLived.push({place: "Kaohsiung, Taiwan", length: "5 years"});
myProfile.placesLived.push({place: "Salt Lake City, Utah", length: "5 years"});

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent =myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src",myProfile.photo);
document.querySelector("#photo").setAttribute("alt",myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let food_li = document.createElement("li");
    food_li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(food_li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobbyElem= document.createElement("li");
    hobbyElem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hobbyElem);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLive => {
    let placedLivedPlace = document.createElement("dt");
    let placedLivedLength = document.createElement("dd");
    
    placedLivedPlace.textContent = placeLive.place;
    placedLivedLength.textContent =placeLive.length;
    
    document.querySelector("#places-lived").appendChild(placedLivedPlace); 
    document.querySelector("#places-lived").appendChild(placedLivedLength);
});

