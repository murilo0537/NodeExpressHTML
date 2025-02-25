const regTrans = document.querySelector(".regTrans");
const sideContainer = document.querySelector(".side-container");
const sideContent = document.querySelector(".side-content");

setTimeout(() => {
  sideContainer.style.filter = "saturate(1)";
  sideContent.style.opacity = "1";
}, 10);

regTrans.addEventListener("click", () => {
  sideContainer.style.maxWidth = "100%";
  sideContent.style.opacity = "0";
  sideContent.style.userSelect = "none";
  sideContainer.style.filter = "saturate(0.2)";
  setTimeout(() => {
    sideContainer.style.maxWidth = "";
    sideContainer.style.marginLeft = "";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 500);
  }, 500);
});
