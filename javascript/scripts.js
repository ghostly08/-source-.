// ::::::::::: Open Popup :::::::::: //

function displayAbout() {
  const popUp = document.querySelector("#about-popup");
  const openPopup = popUp.style.display = "block";
}


// ::::::::::: Close Popup :::::::: //

function closePopup() {
  const popUp = document.querySelector("#about-popup");
  const openPopup = popUp.style.display = "none";
  // const closePopup = popUp.classList.add("close-popup");
}
