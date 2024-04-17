let points;
let liv;
let speed;
let myRand;

// Array med alle positioner
let posArray = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8"];

const liv1 = document.querySelector("#liv1");
const liv2 = document.querySelector("#liv2");
const liv3 = document.querySelector("#liv3");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //vis startskærm
  document.querySelector("#start").classList = "";

  //skjul andre skærme
  document.querySelector("#game").classList.add("skjul");
  document.querySelector("#regler").classList.add("skjul");
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");

  //klik på knap
  document.querySelector("#start_knap").addEventListener("click", startGame);
  document.querySelector("#regel_knap").addEventListener("click", regler);
}

function startGame() {
  console.log("startGame");

  //vis spilskærm
  document.querySelector("#game").classList = "";
  document.querySelector("#time_board").classList = "";

  //skjul andre skærme
  document.querySelector("#start").classList.add("skjul");
  document.querySelector("#regler").classList.add("skjul");
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;

  //Nulstil point + liv
  points = 0;
  liv = 3;
  liv1.classList.remove("skjul");
  liv2.classList.remove("skjul");
  liv3.classList.remove("skjul");

  //reset speed
  speed = 1;

  //Starter timer-animationen (shrink)
  document.querySelector("#time_container2").classList.add("shrink");

  //Når animationen er færdig kaldes stopSpillet()
  document.querySelector("#time_container2").addEventListener("animationend", stopSpillet);

  //start fald animation
  document.querySelector("#makrel_container").classList.add("fald");
  document.querySelector("#mink_container").classList.add("fald");
  document.querySelector("#makrel_container2").classList.add("fald");
  document.querySelector("#mink_container2").classList.add("fald");

  //lyt efter fald animationer er færdig
  document.querySelector("#makrel_container").addEventListener("animationiteration", genstartMakrel);
  document.querySelector("#mink_container").addEventListener("animationiteration", genstartMink);
  document.querySelector("#makrel_container2").addEventListener("animationiteration", genstartMakrel2);
  document.querySelector("#mink_container2").addEventListener("animationiteration", genstartMink2);

  //Lyt efter klik
  document.querySelector("#mink_sprite").addEventListener("mousedown", clickMink);
  document.querySelector("#makrel_sprite").addEventListener("mousedown", clickMakrel);
  document.querySelector("#mink_sprite2").addEventListener("mousedown", clickMink2);
  document.querySelector("#makrel_sprite2").addEventListener("mousedown", clickMakrel2);

  posArray = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8"];

  myRand = Math.floor(Math.random() * 8) + 1;
  console.log(myRand);

  //Giv container en position, start delay + speed
  document.querySelector("#mink_container").classList.add(posArray.shift(), "delay1", "speed" + myRand);
  document.querySelector("#makrel_container").classList.add(posArray.shift(), "delay1", "speed" + myRand);
}

function clickMakrel() {
  console.log("clickMakrel");

  //ryd op, så man ikke kan klikke på den samme
  document.querySelector("#makrel_container").removeEventListener("mousedown", clickMakrel);

  //frys (pause), fald animation
  document.querySelector("#makrel_container").classList.add("frys");

  //Tæl en op på points og udskiv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  if (points >= 5) {
    speed = 3;
  } else if (points >= 2) {
    speed = 2;
  }

  //start forsvind animationer på sprite elementer (firstElementChild er sprite elementet)
  document.querySelector("#makrel_sprite").classList.add("forsvind");

  //Lyt efter forsvind animationer er færdig
  document.querySelector("#makrel_container").addEventListener("animationend", genstartMakrel);
}

function genstartMakrel() {
  console.log("genstartMakrel");

  //ryd op, fjern alt er på container og sprite
  document.querySelector("#makrel_container").classList = "";
  document.querySelector("#makrel_sprite").classList = "";

  //For at kunne genstarte fald animationen, da vi fjerner og tilføjer den i samme funktion
  document.querySelector("#makrel_container").offsetLeft;

  //Giv en random position til container
  myRand = Math.floor(Math.random() * 8) + 1;
  document.querySelector("#makrel_container").classList.add("pos" + myRand);

  document.querySelector("#makrel_container").classList.add("fald");

  //Sæt speed på
  document.querySelector("#makrel_container").classList.add("speed" + speed);

  //start fald animationer på element
  document.querySelector("#makrel_container").addEventListener("mousedown", clickMakrel);
}

function clickMakrel2() {
  console.log("clickMakrel2");

  //ryd op, så man ikke kan klikke på den samme
  document.querySelector("#makrel_container2").removeEventListener("mousedown", clickMakrel);

  //frys (pause), fald animation
  document.querySelector("#makrel_container2").classList.add("frys");

  //Tæl en op på points og udskiv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  if (points >= 5) {
    speed = 3;
  } else if (points >= 2) {
    speed = 2;
  }

  //start forsvind animationer på sprite elementer (firstElementChild er sprite elementet)
  document.querySelector("#makrel_sprite2").classList.add("forsvind");

  //Lyt efter forsvind animationer er færdig
  document.querySelector("#makrel_container2").addEventListener("animationend", genstartMakrel);
}

function genstartMakrel2() {
  console.log("genstartMakrel2");

  //ryd op, fjern alt er på container og sprite
  document.querySelector("#makrel_container2").classList = "";
  document.querySelector("#makrel_sprite2").classList = "";

  //For at kunne genstarte fald animationen, da vi fjerner og tilføjer den i samme funktion
  document.querySelector("#makrel_container2").offsetLeft;

  //Giv en random position til container
  myRand = Math.floor(Math.random() * 8) + 1;
  document.querySelector("#makrel_container2").classList.add("pos" + myRand);

  document.querySelector("#makrel_container2").classList.add("fald");

  //Sæt speed på
  document.querySelector("#makrel_container2").classList.add("speed" + speed);

  //start fald animationer på element
  document.querySelector("#makrel_container2").addEventListener("mousedown", clickMakrel);
}

function genstartMink() {
  console.log("genstartMink");

  //ryd op, fjern alt er på container og sprite
  document.querySelector("#mink_container").classList = "";
  document.querySelector("#mink_sprite").classList = "";

  //For at kunne genstarte fald animationen, da vi fjerner og tilføjer den i samme funktion
  document.querySelector("#mink_container").offsetLeft;

  //Giv en random position til container
  myRand = Math.floor(Math.random() * 8) + 1;
  document.querySelector("#mink_container").classList.add("pos" + myRand);

  //Sæt speed på
  document.querySelector("#mink_container").classList.add("speed" + speed);

  //start fald animationer på element
  document.querySelector("#mink_container").classList.add("fald");

  //Lyt efter klik på element
  document.querySelector("#mink_container").addEventListener("mousedown", clickMink);
}

function clickMink() {
  console.log("clickMink");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  document.querySelector("#mink_container").removeEventListener("mousedown", clickMink);

  //frys (pause), fald animationen
  document.querySelector("#mink_container").classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  document.querySelector("#mink_sprite").classList.add("forsvind");

  //lyt efter forsvind-animationer er færdig
  document.querySelector("#mink_container").addEventListener("animationend", genstartMink);

  //Liv
  document.querySelector("#liv" + liv).classList.add("skjul");
  liv--;

  if (liv <= 0) {
    console.log("liv <= 0");
    stopSpillet();
  }
}

function genstartMink2() {
  console.log("genstartMink2");

  //ryd op, fjern alt er på container og sprite
  document.querySelector("#mink_container2").classList = "";
  document.querySelector("#mink_sprite2").classList = "";

  //For at kunne genstarte fald animationen, da vi fjerner og tilføjer den i samme funktion
  document.querySelector("#mink_container2").offsetLeft;

  //Giv en random position til container
  myRand = Math.floor(Math.random() * 8) + 1;
  document.querySelector("#mink_container2").classList.add("pos" + myRand);

  //Sæt speed på
  document.querySelector("#mink_container2").classList.add("speed" + speed);

  //start fald animationer på element
  document.querySelector("#mink_container2").classList.add("fald");

  //Lyt efter klik på element
  document.querySelector("#mink_container2").addEventListener("mousedown", clickMink);
}

function clickMink2() {
  console.log("clickMink2");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  document.querySelector("#mink_container2").removeEventListener("mousedown", clickMink);

  //frys (pause), fald animationen
  document.querySelector("#mink_container2").classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  document.querySelector("#mink_sprite2").classList.add("forsvind");

  //lyt efter forsvind-animationer er færdig
  document.querySelector("#mink_container2").addEventListener("animationend", genstartMink);

  //Liv
  document.querySelector("#liv" + liv).classList.add("skjul");
  liv--;

  if (liv <= 0) {
    console.log("liv <= 0");
    stopSpillet();
  }
}

function stopSpillet() {
  console.log("stopSpillet");

  //stop timer
  document.querySelector("#time_container2").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //ryd op, fjern alt er på container og sprite
  document.querySelector("#makrel_container").classList = "";
  document.querySelector("#makrel_sprite").classList = "";
  document.querySelector("#mink_container").classList = "";
  document.querySelector("#mink_sprite").classList = "";
  document.querySelector("#makrel_container2").classList = "";
  document.querySelector("#makrel_sprite2").classList = "";
  document.querySelector("#mink_container2").classList = "";
  document.querySelector("#mink_sprite2").classList = "";

  //Fjern alle eventlistner
  document.querySelector("#makrel_container").removeEventListener("animationend", genstartMakrel);
  document.querySelector("#makrel_container").removeEventListener("animationiteration", genstartMakrel);
  document.querySelector("#makrel_container").removeEventListener("mousedown", clickMakrel);
  document.querySelector("#mink_container").removeEventListener("animationend", genstartMink);
  document.querySelector("#mink_container").removeEventListener("animationiteration", genstartMink);
  document.querySelector("#mink_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#makrel_container2").removeEventListener("animationend", genstartMakrel);
  document.querySelector("#makrel_container2").removeEventListener("animationiteration", genstartMakrel);
  document.querySelector("#makrel_container2").removeEventListener("mousedown", clickMakrel);
  document.querySelector("#mink_container2").removeEventListener("animationend", genstartMink);
  document.querySelector("#mink_container2").removeEventListener("animationiteration", genstartMink);
  document.querySelector("#mink_container2").removeEventListener("mousedown", clickMink);

  if (liv <= 0) {
    gameOver();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameOver();
  }
}

function regler() {
  console.log("you lose");

  //vis gameover skærm
  document.querySelector("#regler").classList = "";

  document.querySelector("#time_board").classList.add("skjul");

  //klik på knap
  document.querySelector("#tilbage_knap").addEventListener("click", sidenVises);
}

function gameOver() {
  console.log("you lose");

  document.querySelector("#game_over_points").textContent = points;

  //vis gameover skærm
  document.querySelector("#game_over").classList = "";

  document.querySelector("#time_board").classList.add("skjul");

  //klik på knap
  document.querySelector("#spil_igen").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("yuuhuuu du vandt");

  document.querySelector("#level_complete_points").textContent = points;

  //vis level complete skærm
  document.querySelector("#level_complete").classList = "";

  document.querySelector("#time_board").classList.add("skjul");

  //klik på knap
  document.querySelector("#spil_igen").addEventListener("click", startGame);
}
