window.addEventListener("load", startSpillet);

function startSpillet() {
  console.log("startSpillet");

  //Starter timer-animationen (shrink)
  document.querySelector("#time_sprite").classList.add("shrink");

  //Når animationen er færdig kaldes stopSpillet()
  document.querySelector("#time_sprite").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  console.log("stopSpillet");

  //...til levelComplete eller gameOver
}
