const seconde = document.getElementById("20-secs");
const cappucino = document.getElementById("cappucino-5");
const the = document.getElementById("the-15");
const petitDejeuner = document.getElementById("petit-dejeuner-20");
const dejeuner = document.getElementById("dejeuner-30");
const input = document.querySelector("input");
const span = document.querySelector("span");
const chrono = document.getElementById("chrono");
const aRebourTime = document.querySelector(".a-rebour-time");
aRebourTime.style.display= "none"
// **********************SECONDE************************
seconde.addEventListener("click", function () {
  // VERIFIER SI UN CHRONO MARCHE ET ARRETE LE
  
  // DUREE DU COMPTE A REBOURS
  let ilgeNaWari = 20;
//=====================================================
  // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//====================================================
  // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function miseAJourChrono() {
    chrono.textContent = formatTime(ilgeNaWari);
  }
//===================================================
  // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeInterval1 = setInterval(function () {
    if (ilgeNaWari > 0) {
      ilgeNaWari--;
      miseAJourChrono();
      span.textContent = new Date(
        Date.now() + ilgeNaWari * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeInterval1);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
  
//===================================================
  // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  miseAJourChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + ilgeNaWari * 1000
  ).toLocaleTimeString();
});
// **********************CAPPUCINO************************
cappucino.addEventListener("click", function () {
  // DUREE DU COMPTE À REBOURS (5 minutes)
  let ilgeNaBiyu = 300;
//=====================================================
 // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//====================================================
 // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function updateChrono() {
    chrono.textContent = formatTime(ilgeNaBiyu);
  }
//===================================================
  // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeInterval2 = setInterval(function () {
    if (ilgeNaBiyu > 0) {
      ilgeNaBiyu--;
      updateChrono();
      span.textContent = new Date(
        Date.now() + ilgeNaBiyu * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeInterval2);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
//===================================================
  // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  updateChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + ilgeNaBiyu * 1000
  ).toLocaleTimeString();
});

// **********************THE***************************

the.addEventListener("click", function () {
    // DUREE DU COMPTE À REBOURS (15 minutes)
  let ilgeNaUku = 900;
//=====================================================
 // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//====================================================
 // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function updateChrono() {
    chrono.textContent = formatTime(ilgeNaUku);
  }
//===================================================
  // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeInterval3 = setInterval(function () {
    if (ilgeNaUku > 0) {
      ilgeNaUku--;
      updateChrono();
      span.textContent = new Date(
        Date.now() + ilgeNaUku * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeInterval3);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
//===================================================
   // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  updateChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + ilgeNaUku * 1000
  ).toLocaleTimeString();
});

// **********************PETITDEJEUNER************************

petitDejeuner.addEventListener("click", function () {
   // DUREE DU COMPTE À REBOURS (20 minutes)
  let ilgeNaHudu = 1200;
//=====================================================
 // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//====================================================
 // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function updateChrono() {
    chrono.textContent = formatTime(ilgeNaHudu);
  }
//===================================================
  // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeInterval4 = setInterval(function () {
    if (ilgeNaHudu > 0) {
      ilgeNaHudu--;
      updateChrono();
      span.textContent = new Date(
        Date.now() + countdownDuration * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeInterval4);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
//===================================================
  // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  updateChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + ilgeNaHudu * 1000
  ).toLocaleTimeString();
});

// **********************DEJEUNER************************

dejeuner.addEventListener("click", function () {
    // DUREE DU COMPTE À REBOURS (30 minutes)
  let ilgeNaBiyar = 1800;
//=====================================================
 // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//====================================================
 // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function updateChrono() {
    chrono.textContent = formatTime(ilgeNaBiyar);
  }
//===================================================
  // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeInterval5 = setInterval(function () {
    if (ilgeNaBiyar > 0) {
      ilgeNaBiyar--;
      updateChrono();
      span.textContent = new Date(
        Date.now() + ilgeNaBiyar * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeInterval5);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
//===================================================
    // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  updateChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + ilgeNaBiyar * 1000
  ).toLocaleTimeString();
});
// **********************INPUT************************

// Sélectionnez l'élément input par son ID
const countdownInput = document.getElementById("countdown-input");

// Ajoutez un écouteur d'événements pour détecter les changements de valeur
countdownInput.addEventListener("change", function () {
  // Récupérez la valeur entrée dans l'input (en minutes)
  const inputValue = parseInt(countdownInput.value);

  // Assurez-vous que la valeur est un nombre valide et supérieure à zéro
  if (!isNaN(inputValue) && inputValue > 0) {
    // Calculez la durée du compte à rebours en secondes
    const countdownDuration = inputValue * 60;

    // Démarrez le compte à rebours (vous pouvez réutiliser le code précédent)
    startCountdown(countdownDuration);
  } else {
    // Gérez les cas où la valeur entrée n'est pas valide
    alert("Kaï wani irin chachacha né ina ga tapa ganin locaci 0 !!!");
    // Effacez la valeur de l'input
    countdownInput.value = "";
  }
});
//===================================================
// Fonction pour démarrer un compte à rebours (code précédent)
function startCountdown(duration) {
  // Sélectionnez les éléments HTML nécessaires
  const chrono = document.getElementById("chrono");
  const span = document.querySelector(".a-rebour-time span");
//===================================================
 // JE FORMATE LE TEMPS EN CE TYPE (hh:mm:ss)
  function formatTime(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const sauranDakiku = secondes % 60;
    return (
      ("0" + heures).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sauranDakiku).slice(-2)
    );
  }
//===================================================
  // POUR METTRE A JOUR L'ELEMENT "chrono" A CHAQUE FOIS
  function updateChrono() {
    chrono.textContent = formatTime(duration);
  }
//===================================================
   // METTRE A JOUR LE COMPTE A REBOURS CHAQUE SECONDE
  const ilgeIntervalInput = setInterval(function () {
    if (duration > 0) {
      duration--;
      updateChrono();
      span.textContent = new Date(
        Date.now() + duration * 1000
      ).toLocaleTimeString();
    } else {
      clearInterval(ilgeIntervalInput);
      chrono.textContent = "";
      span.textContent = "";
    }
  }, 1000);
//===================================================
   // J'INITIALISE L'AFFICHAGE DU COMPTE À REBOURS
  updateChrono();
  aRebourTime.style.display= "block";
  span.textContent = new Date(
    Date.now() + duration * 1000
  ).toLocaleTimeString();
}

