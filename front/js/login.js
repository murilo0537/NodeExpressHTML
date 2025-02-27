const sideContainer = document.querySelector(".side-container");
const sideContent = document.querySelector(".side-content");
const loginBG = document.querySelector(".loginBG-img");

// START PAGE ANIMATIONS
setTimeout(() => {
  sideContainer.style.filter = "saturate(1)";
  sideContent.style.opacity = "1";
  loginBG.style.opacity = "1";
}, 10);

const regTrans = document.querySelector(".regTrans");

// ENTRY TYPE ANIMATIONS
regTrans.addEventListener("click", () => {
  sideContainer.style.maxWidth = "100%";
  sideContainer.style.backgroundColor = "#f00a2d";
  sideContent.style.opacity = "0";
  sideContent.style.userSelect = "none";
  sideContainer.style.filter = "saturate(0.2)";
  loginBG.style.right = "-300px";
  setTimeout(() => {
    sideContainer.style.maxWidth = "";
    sideContainer.style.marginLeft = "auto";
    loginBG.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "register.html";
    }, 500);
  }, 500);
});
