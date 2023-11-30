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

  let output = '<div class="grid grid-cols-2 gap-4">';

  data.forEach((team, index) => {
    output +=
      ' <div class="flex items-center rounded-2xl bg-tablebg p-4 gap-4 mr-7 mt-7 ml-7 h-16">';
    output +=
      " <div class='flex-grow font-bold'>" + team.matchDateTime + "</div>";
    output +=
      ' <div class="w-8"> <img src="' + team.team1.teamIconUrl + '"/></div>';
    output += " <div class='flex-grow'>" + team.team1.teamName + "</div>";
    output += " <div class='flex-grow justify-center'>" + "-" + "</div>";
    output +=
      ' <div class="w-8"> <img src="' + team.team2.teamIconUrl + '"/></div>';
    output += " <div class=''>" + team.team2.teamName + "</div>";
    output += "</div>";
  });

  output += "</div>";

  console.log("output", output);
  element.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", function () {
  loadMatch();
});
