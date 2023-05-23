function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// function toggleNavi() {
//   var y = document.getElementsByClassName("responsive");
//   if (y.style.display === "none") {
//     y.style.display = "none";
//   } else {
//     y.style.display = "none";
//   }
// }