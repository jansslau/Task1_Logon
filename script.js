let currentBackground = "NAVINDEX1.png";

function handleButtonClick(buttonNumber) {
  if (currentBackground === "NAVINDEX1.png") {
    if (buttonNumber === 7) {
      changeBackground("LOGONSTATUS1.png");
      return; 
    }
  }

  if (currentBackground === "LOGONSTATUS1.png") {
    if (buttonNumber === 1) {
      changeBackground("ATCCENTER1.png");
      return; 
    }
    if (buttonNumber === 14) {
      changeBackground("LOGONSTATUS2OFF.png");
      return; 
    }
  }

  if (currentBackground === "ATCCENTER1.png") {
    if (buttonNumber === 14) {
      changeBackground("ATCCENTER2.png");
      return; 
    }
  }

  if (currentBackground === "ATCCENTER2.png") {
    if (buttonNumber === 13) {
      changeBackground("ATCCENTER1.png");
      return; 
    }
    if (buttonNumber === 4) {
      changeBackground("EDYY_SEND.png");
      return; 
    }
  }

  if (currentBackground === "LOGONSTATUS2OFF.png") {
    if (buttonNumber === 13) {
      changeBackground("LOGONSTATUS1.png");
      return;
    }
  }

  if (currentBackground === "EDYY_SEND.png") {
    if (buttonNumber === 7) {
      displaySequence(["EDYY_SENDING.png", "EDYY_SENT.png", "EDYY_ACCEPTED.png", "ATNACTCTR.png"]);
      return; 
    }
  }

  if (currentBackground === "ATNACTCTR.png") {
    if (buttonNumber === 14) {
      changeBackground("LOGONSTATUS2ON.png");
      return; 
    }
  }

  if (currentBackground === "LOGONSTATUS2ON.png") {
    if (buttonNumber === 13) {
      changeBackground("ATNACTCTR.png");
      return; 
    }
  }
}

function changeBackground(newBackground) {
  document.getElementById("NAVINDEX1").src = newBackground;
  currentBackground = newBackground; 
  if (currentBackground === "ATNACTCTR.png") {
    document.getElementById("simulation-info").style.display = "block";
  } else {
    document.getElementById("simulation-info").style.display = "none";
  }
}


function displaySequence(pictures) {
  let index = 0;
  let interval = setInterval(() => {
    if (index < pictures.length - 1) {
      changeBackground(pictures[index]);
      index++;
    } else {
      clearInterval(interval);

      changeBackground(pictures[pictures.length - 1]);
    }
  }, 3000); 
}

function startSimulation() {
  document.getElementById("simulation-info").style.display = "none";

  displaySequence([
    "NextCTREDUU.png",
    "EDDU.png",
    "FreeNextEDUU.PNG"
  ]);

  setTimeout(() => {
    changeBackground("FreeNextEDUU.PNG");
  }, (3 * 2000)); //wegen den 3 bilden die zuvor eingeblendet werden 

  document.getElementById("simulation-info-text").innerText = "As soon as the handover is completed the next Center to which CPDLC is connected will be displayed in 'ATN ACT CTR.'";
}