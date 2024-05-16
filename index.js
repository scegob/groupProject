// data for the array url https://www.polygon.com/23648669/best-video-games-2023 -Bill

const gamesData = {
  The_Legend_Of_Zelda: {
    publisherName: "Nintendo EPD",
    name: "The Legends of Zelda: Tears of the kingdom",
    platforms: "Nintendo Switch",
    rating: "1",
  },
  Baldurs_Gate_3: {
    publisherName: "Larian Studio",
    name: "Baldur's Gate 3",
    platform: "PlayStation 5 and Windows PC",
    rating: "2",
  },
  Alan_Wake_2: {
    publisherName: "OSU",
    name: "ALAN WAKE 2",
    platform: "PlayStation 5, Windows PC, and Xbox Series X",
    rating: "3",
  },
  Super_Mario_Bros_Wonder: {
    publisherName: "Nintendo EPD",
    name: "ALAN WAKE 2",
    platform: "Super Mario Bros. Wonder",
    rating: "4",
  },
};

document.getElementById("loadDataBtn").addEventListener("click", function () {
  const tableBody = document.querySelector("#games-table tbody");
  tableBody.innerHTML = "";

  Object.values(gamesData).forEach(function (game) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${game.name}</td>
        <td>${game.publisherName}</td>
        <td>${game.platform}</td>
        <td>${game.rating}</td>
      `;
    tableBody.appendChild(row);
  });
});
