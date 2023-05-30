function toggleVideo() {
  const iframe = document.getElementById("youtube-video");
  iframe.style.display = iframe.style.display === "none" ? "block" : "none";
}

// const elements = document.querySelectorAll(".changeGif");
// elements.forEach((element) => {
//     element.addEventListener("click", (e) => {
//         e.preventDefault();
//         changeBackground(element.id);
//     });
// });

function changeTheme(type) {
  document.body.style.backgroundImage = `url('../assets/gifs/${type}.gif')`;
  const iframe = document.getElementById("youtube-video");
  switch (type) {
    case "hiphop":
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/videoseries?list=PL_UCDs2ps_71f_WxFiOGE6dGUqpq9hkeA"
      );
      break;
    // WORKS
    case "lofi":
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/videoseries?list=PLUjbpfyneWKITlbjiGj3ybzeSqG1zl6Hl"
      );
      break;
    case "ambient":
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/videoseries?list=PL290F940EDA519EB6"
      );
      break;
    case "phonk":
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/videoseries?list=PLliiMqsVIF-OPMfR4mlwvdVLMp9ko0QKY"
      );
      break;
    case "index":
      window.location.href = "index.html";
      break;
  }
}
// myIframe.setAttribute("src", "");
