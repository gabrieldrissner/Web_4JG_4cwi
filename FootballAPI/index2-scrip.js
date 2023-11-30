function loadMatch() {
  fetch("https://api.openligadb.de/getmatchdata/bl1/2023/13").then((res) =>
    res.json().then((data) => {
      insertMatch(data);
    })
  );
}

function insertMatch(data) {
  console.log("data", data);
  const element = document.getElementById("gamesrow");

  let output = '<div class="">';

  data.forEach((team, index) => {
    output +=
      ' <div class="flex items-center justify-center rounded-2xl bg-tablebg p-4 gap-4 w-72 mt-7 ml-7 h-16">';
    output += " <div class='flex-grow'>" + team.team1.shortName + "</div>";
    output += " <div class='flex-grow justify-center'>" + "-" + "</div>";
    output +=
      " <div class='flex-grow ml-auto'>" + team.team2.shortName + "</div>";
    output += "</div>";
  });

  output += "</div>";

  console.log("output", output);
  element.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", function () {
  loadTable();
  loadMatch();
});
