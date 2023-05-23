function toggleIframe() {
  const iframe = document.querySelector(".hidden-iframe");
  iframe.style.display = iframe.style.display === "none" ? "block" : "none";
}

const elements = document.querySelectorAll(".changeGif");
elements.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        changeBackground(element.id);
    });
});

function changeBackground(type) {
  document.body.style.backgroundImage = `url('../assets/gifs/${type}.gif')`;
}
