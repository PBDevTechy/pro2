document.getElementById("button").addEventListener("click", function () {
  // Change background to dancing rick
  document.body.style.backgroundImage = "url('download.gif')";

  // Hide the heading and the button
  document.querySelector(".everything").style.display = "none";

  // Play song
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

  // Do something with the form data
  // For example, you can display it on the page or send it to a server
  var formData = {
    name: name,
    email: email,
    message: message,
    subject: subject,
  };
  console.log(formData);

  // Optionally, you can reset the form after submission
  // document.getElementById("myForm").reset();
});

console.log(formData);

// function showAlert() {
//   alert('This is an alert!');
//   var videoContainer = document.getElementById('videoContainer');
//   videoContainer.style.display = 'block';

//   var myVideo = document.getElementById('myVideo');
//   myVideo.play();
// }

function showAlert() {
  alert("Thank you! Please go to the next page...");
  window.open("https://www.youtube.com/watch?v=BbeeuzU5Qc8");
  // Or you can use window.location.href to redirect the current window
  // window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
