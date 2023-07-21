const texts = [
  "Bro knows obamas last name",
"Bro uses Windows 9",
"Bro divises by 0",
"Bro can pause online games",
"Bro give directions to the navigator",
"Bro knows where the parallel lines meet",
"Bro tells the fbi to open up",
"Bro knows the 27th alphabet letter",
"Bro can delete settings",
"Bro heard the Big Bang",
"Bro knows where iphone 9 at",
"Bro knows who asked",
"Bro knows who let the dawgs out",
"Bro raised his grandparents",
"Bro knows what the dog doin",
"Bro tells God his sins",
"Bro knows what Amber heard",
"Bro united the states",
"Bro tells his parents its bed time",
"Bro knows why Ohio is the way it is",
"Bro knows what's in area 51",
"Bro witnessed the Big Bang",
"Bro signed the bible",
"Bro knows the matrix",
"Bro knows who cares",
"Bro can park here",
"Bro knows the terms and conditions",
"Bro calls 911 and asks their emergency",
"Bro asks the website to accept his cookies",
"Bro knows what women want to eat",
];

let index = parseInt(localStorage.getItem("textIndex")) || 0;

function changeText() {
  const textElement = document.getElementById("changingText");
  const newText = texts[index];

  textElement.classList.remove("animated-text");
  void textElement.offsetWidth;
  textElement.classList.add("animated-text");

  textElement.textContent = newText;

  index = (index + 1) % texts.length;
  localStorage.setItem("textIndex", index);
}

changeText();

setInterval(changeText, 7 * 1000); 

const video = document.getElementById("video-bg");
video.addEventListener("loadedmetadata", function () {
  const storedTime = parseFloat(localStorage.getItem("videoPlaybackTime"));
  if (storedTime && !isNaN(storedTime) && storedTime < video.duration) {
    video.currentTime = storedTime;
  }
  video.play();
});

window.addEventListener("beforeunload", function () {
  localStorage.setItem("videoPlaybackTime", video.currentTime.toString());
});


