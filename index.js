// data for the array url https://www.polygon.com/23648669/best-video-games-2023 -Bill

// An array of the the game data - Bill
const gamesData = {
  The_Legend_Of_Zelda: {
    developerName: "Nintendo EPD",
    name: "The Legends of Zelda: Tears of the kingdom",
    platform: "Nintendo Switch",
    rating: "1", // not a number but a string
  },
  Baldurs_Gate_3: {
    developerName: "Larian Studio",
    name: "Baldur's Gate 3",
    platform: "PlayStation 5 and Windows PC",
    rating: "2",
  },
  Alan_Wake_2: {
    developerName: "Remedy Entertainment",
    name: "Alan Wake 2",
    platform: "PlayStation 5, Windows PC, and Xbox Series X",
    rating: "3",
  },
  Super_Mario_Bros_Wonder: {
    developerName: "Nintendo EPD",
    name: "Super Mario Bros. Wonder",
    platform: "Nintendo Switch",
    rating: "4",
  },
  Pikmin_4: {
    developerName: "Nintendo EPD, Eighting",
    name: "Pikmin 4",
    platform: "Nintendo Switch",
    rating: "5",
  },
  Concoon: {
    developerName: "Geometric Interactive",
    name: "Cocoon",
    platform:
      "Nintendo Switch, PlayStation 4, PlayStation 5, Windows PC, Xbox One, and Xbox Series X",
    rating: "6",
  },
  Street_Fighter_6: {
    developerName: "Capcom",
    name: "Street Fighter 6",
    platform: "PlayStation 4, PlayStation 5, Windows PC, and Xbox Series X",
    rating: "7",
  },
  Marvels_Spider_Man_2: {
    developerName: "Insomniac Games",
    name: "Marvel’s Spider-Man 2",
    platform: "PlayStation 5",
    rating: "8",
  },
  Jusant: {
    developerName: "Don’t Nod",
    name: "Marvel’s Spider-Man 2",
    platform: "PlayStation 5, Windows PC, and Xbox Series X",
    rating: "9",
  },
  Armored_Core_6: {
    developerName: "FromSoftware",
    name: "Armored Core 6: Fires Of Rubicon",
    platform:
      "PlayStation 4, PlayStation 5, Windows PC, Xbox One, and Xbox Series X",
    rating: "10",
  },
};

document.getElementById("loadDataBtn").addEventListener("click", function () {
  const tableBody = document.querySelector("#games-table tbody");
  tableBody.innerHTML = "";

  Object.values(gamesData).forEach(function (game) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="white-text">${game.name}</td>
        <td class="white-text">${game.developerName}</td>
        <td class="white-text">${game.platform}</td>
        <td class="white-text">${game.rating}</td>
      `;
    tableBody.appendChild(row);
  });
});

// Array of YouTube video URLs - Bill
const videos = [
  "https://www.youtube.com/embed/uHGShqcAHlQ?si=TT15A6zRFGfQWIZQ",
  "https://www.youtube.com/embed/1T22wNvoNiU?si=FYaOZlxqu_Rql__P",
  "https://www.youtube.com/embed/438Kjx7m6Uc?si=ucjM_twb2W6QH_2p",
  "https://www.youtube.com/embed/JStAYvbeSHc?si=G55mxz6_grXgcj6Q",
  "https://www.youtube.com/embed/GwOUuC8Y5N0?si=3nm5QPPVQxvPbUmi",
];

// Function to create and append video iframes
function createVideoElements() {
  const container = document.getElementById("videos-container");

  videos.forEach((videoUrl) => {
    // Create a div container for each video
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    // Create an iframe element for the video
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Append the iframe to the video container
    videoContainer.appendChild(iframe);

    // Append the video container to the main container
    container.appendChild(videoContainer);
  });
}

// Create video elements when the page loads
window.onload = createVideoElements;

// Array of games - Billeh
const games = [
  "The Legends of Zelda: Tears Of The kingdom",
  "Baldur's Gate 3",
  "Alan Wake 2",
  "Super Mario Bros. Wonder",
  "Pikmin 4",
];

// Function to create form dynamically - Bill
function createForm() {
  const form = document.getElementById("game-form");

  games.forEach((game, index) => {
    // Create a label element
    const label = document.createElement("label");
    label.textContent = game;

    // Create a radio input element
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "game";
    radio.value = game;
    if (index === 0) {
      radio.checked = true; // Check the first radio button by default
    }

    // Append radio to label
    label.prepend(radio);

    // Append label to form
    form.appendChild(label);
  });
}

// Function to handle form submission - Rylee
function submitForm() {
  const form = document.getElementById("game-form");
  const selectedGame = form.elements["game"].value;
  alert(`Your favorite game is: ${selectedGame}`);
}

// Create the form when the page loads
window.onload = createForm;
