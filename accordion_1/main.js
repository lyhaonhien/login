/*Get all elements have class "accordion"*/
var acc = document.getElementsByClassName("accordion");
/*Variable i in "for" loop*/
var i;
/*Apply a "click" event for all "accordion"*/
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); /*Toggle (add and remove) class "active" for accordion when click on it*/
    var panel = this.nextElementSibling; /*Get "panel" of current accordion*/
    if (panel.style.display === "block") {
      panel.style.display = "none";  /*If panel displayed, it would be hide when click on accordion*/
    } else {
      panel.style.display = "block";  /*If panel didn't displayed, it would be displayed when click on accordion*/
    }
  });
}