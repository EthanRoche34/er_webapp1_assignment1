/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
console.log('Hello from the Web App Dev 1 lab!');
function likeIt() {
  alert("Thanks! You're okay too");
}
function showHide() {
  let readMoreDiv = document.getElementById("readmore");
  readMoreDiv.style.color = "teal";
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none";
  } else {
    readMoreDiv.style.display = "block";
  }
}
function welcomeUser() {
  let username = prompt("What's your name?");
  let welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ', looking forward to hearing your playlists! Click this message to close it.</p>';
  welcomeUserDiv.style.cursor = "pointer";
}

function hideWelcome() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if (welcomeUserDiv.style.display === "block") {
    welcomeUserDiv.style.display = "none";
  }
}

$(document).ready(function(){
  $("#tableoutput").html("<h2 class='ui header'>" + sonatas.title + "</h2>");
  
  $("#tableoutput").append("<table class='ui fixef striped table'><thead><tr><th>Song</th><th>Artists</th></tr></thead><tbody>");
  
  for (let i in sonatas.songs){
    $("tableoutput tr:last").after("<tr><td>" + sonatas.songs[i].title + "</td><td>" + sonatas.songs[i].artist + "</td></tr>");
  }
  
  $("#tableoutput").append("</tbody></table>");
});