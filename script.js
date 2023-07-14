const texts = [
  "Bro knows what amber heard",
  "Bro knows who asked",
  "Bro United the states",
  "Bro tells his watch the hour",
  "Bro tells his barber he didn't like the cut",
  "Bro knows what da dog doin",
  "Bro knows who let the dawgs out",
  "Bro knows where iPhone 9 at",
  "Bro knows the alphabet that comes before a",
  "Bro calls 911 and asks their emergency",
  "Bro knows Obama's last name",
  "Bro named his Grandparents",
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
