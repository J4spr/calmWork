function toggleIframe(type) {
  const iframe = document.querySelector(".hidden-iframe");
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
  switch (type) {
    case "hiphop":
      iframe.src =
        "https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL_UCDs2ps_71f_WxFiOGE6dGUqpq9hkeA";
      break;
    case "ambient":
      iframe.src =
        "https://www.youtube.com/watch?v=s4ISiIFFLao&list=PL290F940EDA519EB6&ab_channel=OVERSEA";
      break;
    case "lofi":
      iframe.src =
        "https://www.youtube.com/watch?v=32CYcqFt1-8&list=PLUjbpfyneWKITlbjiGj3ybzeSqG1zl6Hl&ab_channel=ChillRadio";
      break;
    case "phonk":
      iframe.src =
        "https://www.youtube.com/embed/videoseries?list=PLliiMqsVIF-OPMfR4mlwvdVLMp9ko0QKY";
      break;
    case "index":
      window.location.href = "index.html";
      break;
  }
 
}
