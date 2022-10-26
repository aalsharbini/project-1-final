function validate() {
  var empt = document.getElementById("email").value;
  console.log("i'm working fine here");
  if (empt == "") {
    alert("Please Enter Your Email");
  }
}

function color() {
  document.getElementById("submitbtn").style.backgroundColor = "blue";
}
function color1() {
  document.getElementById("submitbtn").style.backgroundColor = "green";
}
