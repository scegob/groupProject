const gamesData = {
  The_Legend_Of_Zelda: {
    publisherName: "Nintendo EPD",
    name: "The Legends of Zelda: Tears of the kingdom",
    platforms: { wins: 7, losses: 2 },
    rating: "1",
  },
  Baldurs_Gate_3: {
    publisherName: "Larian Studio",
    name: "Baldur{`$'s`} Gate 3",
    platform: { wins: 6, losses: 3 },
    overallRecord: { wins: 7, losses: 6 },
  },
  OREGON_STATE: {
    schoolId: "OSU",
    logoImage: "Components/Images/osu.png",
    name: "OREGON STATE",
    conferenceRecord: { wins: 5, losses: 4 },
  },
  CALIFORNIA: {
    schoolId: "CAL",
    logoImage: "Components/Images/cal.png",
    name: "CALIFORNIA",
    conferenceRecord: { wins: 4, losses: 5 },
  },
  WASHINGTON: {
    schoolId: "UW",
    logoImage: "Components/Images/uw.png",
    name: "WASHINGTON",
    conferenceRecord: { wins: 3, losses: 6 },
  },
  STANFORD: {
    schoolId: "SU",
    logoImage: "Components/Images/stanford.png",
    name: "STANFORD",
    conferenceRecord: { wins: 2, losses: 7 },
  },
};

document.getElementById("loadDataBtn").addEventListener("click", function () {
  const tableBody = document.querySelector("#pac12-table tbody");
  tableBody.innerHTML = "";

  Object.values(gamesData).forEach(function (team) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${team.name}</td>
        <td>${team.conferenceRecord.wins}</td>
        <td>${team.overallRecord.wins}</td>
        <td>${team.lastGame.result} ${team.lastGame.score} vs ${team.lastGame.opponent}</td>
      `;
    tableBody.appendChild(row);
  });
});
