const genderFilter = document.getElementById("genderFilter");
const hp_result = document.getElementById("hp_result");
const hp_name = document.getElementById("hp_name");
const hp_house = document.querySelector(".house");
const hp_button = document.getElementById("hp_button");

hp_button.addEventListener("click", getRandomCharacter);

function getRandomCharacter() {
    let apiUrl = "https://hp-api.onrender.com/api/characters";

    const selectedGender = genderFilter.value;
    if (selectedGender && selectedGender !== "no_filter") {
        apiUrl += `?gender=${selectedGender}`;
    }

    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            const filteredData = selectedGender && selectedGender !== "no_filter"
                ? data.filter(character => character.gender === selectedGender && character.image)
                : data.filter(character => character.image);

            if (filteredData.length === 0) {
                hp_name.textContent = "No matching characters found";
                hp_result.innerHTML = "";
                hp_house.innerHTML = "";
                return;
            }

            const randIndex = Math.floor(Math.random() * filteredData.length);
            const { name: hpName, image: hpImg, house: hpHouse } = filteredData[randIndex];

            hp_name.textContent = hpName;
            hp_result.innerHTML = `<img src="${hpImg}" alt="${hpName}" />`;
            hp_house.innerHTML = hpHouse;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
