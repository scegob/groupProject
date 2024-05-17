// data for the array url https://www.polygon.com/23648669/best-video-games-2023 -Bill

const gamesData = {
  The_Legend_Of_Zelda: {
    developerName: "Nintendo EPD",
    name: "The Legends of Zelda: Tears of the kingdom",
    platform: "Nintendo Switch",
    rating: "1",
  },
  Baldurs_Gate_3: {
    developerName: "Larian Studio",
    name: "Baldur's Gate 3",
    platform: "PlayStation 5 and Windows PC",
    rating: "2",
  },
  Alan_Wake_2: {
    developerName: "Remedy Entertainment",
    name: "ALAN WAKE 2",
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
        <td>${game.name}</td>
        <td>${game.developerName}</td>
        <td>${game.platform}</td>
        <td>${game.rating}</td>
      `;
    tableBody.appendChild(row);
  });
});
