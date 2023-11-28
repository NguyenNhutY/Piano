const pianoContainer = document.querySelector(".piano-container");
const base = "./audio/";

window.onload = () => {
  const createPianoKey = (index) => {
    const div = document.createElement("div");
    const isBlackKey = index > 10;
    const keyTypeClass = isBlackKey ? "black-key" : "white-key";

    div.classList.add("key", keyTypeClass);

    const number = index <= 9 ? `0${index}` : index;

    div.addEventListener("click", () => {
      playAudio(`key${number}.mp3`);
    });

    pianoContainer.appendChild(div);
  };

  const playAudio = (filename) => {
    new Audio(`${base}${filename}`).play();
  };

  // Generate piano keys
  for (let index = 1; index <= 24; index++) {
    createPianoKey(index);
  }
};
