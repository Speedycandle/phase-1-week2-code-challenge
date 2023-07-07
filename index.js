const CHARACTERS_URL = "http://localhost:3000/characters";
const animalList = document.getElementById("animals-list");
const animalDetailsContainer = document.getElementById("animal-details");
const voteButton = document.getElementById("vote-button");
const resetButton = document.getElementById("reset-button");
const addAnimalForm = document.getElementById("add-animal-form");

// Fetch animals from the URL
async function fetchAnimals() {
    try {
      const response = await fetch(CHARACTERS_URL);
      const data = await response.json();
      renderAnimals(data);
    } catch (error) {
      console.log("Error fetching animals:", error);
    }
  }

  // Render the animals on the page
function renderAnimals(data) {
    animalList.innerHTML = "";
    data.forEach((animal) => {
      const li = document.createElement("li");
      li.textContent = animal.name;
      li.addEventListener("click", () => {
        showAnimalDetails(animal);
      });
      animalList.appendChild(li);
    });
  }
  
  