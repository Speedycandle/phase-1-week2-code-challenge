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
  