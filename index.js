function onShow() {
  var menu = document.querySelector(".header-menu-mobile");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
