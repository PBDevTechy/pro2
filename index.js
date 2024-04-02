document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('download.gif')";

  document.querySelector(".everything").style.display = "none";

  var song = document.getElementById("song");
  song.play();
});

ddocument.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var subject = document.getElementById("subject").value;

  var formData = {
    name: name,
    email: email,
    message: message,
    subject: subject,
  };
  console.log(formData);
});

console.log(formData);

function showAlert() {
  alert("Thank you! Please go to the next page...");
  window.open("https://www.youtube.com/watch?v=BbeeuzU5Qc8");
}
