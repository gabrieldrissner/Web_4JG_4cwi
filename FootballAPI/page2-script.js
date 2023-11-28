
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
      output +=' <div class="flex items-center rounded-2xl bg-tablebg p-4 gap-4 w-72 mt-7 ml-7 h-16">';
      output += ' <div class="w-8"> <img src="' + team.team1.datateamIconUrl + '"/></div>';
      output += ' <div class="w-8"> <img src="' + team.team2.datateamIconUrl + '"/></div>';
      output += " <div class='flex-grow'>" + team.matchID + "</div>";
      output += " <div class='flex-grow'>" + team.matchDateTime + "</div>";
      output += "</div>";
  
    });
  

    
    output += "</div>";
  
    console.log("output", output);
    element.innerHTML = output;
  }
  
  
document.addEventListener("DOMContentLoaded",function(){ 
    loadMatch();
})


  