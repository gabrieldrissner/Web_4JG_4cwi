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

  let output = "";

  data.forEach((team, index) => {
    output += ' <div class="flex items-center rounded-2xl bg-tablebg p-4 gap-4">';
    output += "<div>" + (index + 1) + "</div>";
    output += ' <div class="w-8"> <img src="' + team.teamIconUrl + '"/></div>';
    output += " <div>" + team.teamName + "</div>";
    output += " <div>" + team.points + "</div>";
    output += "</div>";
  });
  

  console.log("output", output);
  element.innerHTML = output;
}

loadTable();
