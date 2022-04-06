function openMenu() {

  var nav = document.getElementsByTagName('nav');

  var button = document.getElementById('menulogo');
  
  nav[0].classList.toggle("responsive");

  if (nav[0].classList.contains("responsive")) {
    button.classList.replace("fa-bars", "fa-close");
  } else {
    button.classList.replace("fa-close", "fa-bars");
  }


}