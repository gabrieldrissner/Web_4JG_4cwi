function loadTable() {
  fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
    res.json().then((data) => {
      insertTable(data);
    })
  );
}

function insertTable(data) {
  console.log("data", data);
  const element = document.getElementById("tableline");

  let output = '<div class="flex">';

  data.forEach((team, index) => {
    output +=
      ' <div class="flex items-center rounded-2xl bg-tablebg p-4 gap-4 w-72 mt-7 ml-7 h-16">';
    output += "<div class=font-bold>" + (index + 1) + "</div>";
    output += ' <div class="w-8"> <img src="' + team.teamIconUrl + '"/></div>';
    output += " <div class='flex-grow'>" + team.teamName + "</div>";
    output += " <div class='font-bold ml-auto'>" + team.points + "</div>";
    output += "</div>";

    if ((index + 1) % 2 == 0) {
      output += '</div><div class="flex">';
    }
  });

  output += "</div>";

  console.log("output", output);
  element.innerHTML = output;
}
