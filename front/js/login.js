const sideContainer = document.querySelector(".side-container");
const sideContent = document.querySelector(".side-content");

// START PAGE ANIMATIONS
setTimeout(() => {
  sideContainer.style.filter = "saturate(1)";
  sideContent.style.opacity = "1";
}, 10);

const regTrans = document.querySelector(".regTrans");
const admSwitchRow = document.querySelector(".adm-switch-row");

// ENTRY TYPE ANIMATIONS
regTrans.addEventListener("click", () => {
  admSwitchRow.style.opacity = "0";
  sideContainer.style.maxWidth = "100%";
  sideContainer.style.backgroundColor = "#f00a2d";
  sideContent.style.opacity = "0";
  sideContent.style.userSelect = "none";
  sideContainer.style.filter = "saturate(0.2)";
  setTimeout(() => {
    sideContainer.style.maxWidth = "";
    sideContainer.style.marginLeft = "auto";
    setTimeout(() => {
      window.location.href = "register.html";
    }, 500);
  }, 500);
});

const admSwitch = document.querySelector(".adm-switch");
const admSwitchBall = document.querySelector(".adm-switch-ball");
let adminMode = false;

// ADMIN SWITCH ANIMATIONS
admSwitch.addEventListener("click", () => {
  adminMode = !adminMode;

  admSwitchBall.classList.toggle("adm-switch-ball-active");
  sideContainer.classList.toggle("side-container-admin");
});
