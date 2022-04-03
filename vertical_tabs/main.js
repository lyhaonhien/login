function openCity(evt, cityName) {
  //Define all variables
  var i, tablinks, tabcontent;

  //Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for(i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for(i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active"
}  

//Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
//Close tabcontent by close sign (x)
var close = document.getElementsByClassName('topright');
for (var j = 0; j < close.length; j++) {
  close[j].addEventListener("click", function() {
    this.parentElement.style.display = "none";
    var tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  })
}