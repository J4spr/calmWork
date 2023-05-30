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
      myIframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/videoseries?list=PL_UCDs2ps_71f_WxFiOGE6dGUqpq9hkeA"
      );
      break;
    case "ambient":
      myIframe.setAttribute(
        "src",
        "https://www.youtube.com/watch?v=s4ISiIFFLao&list=PL290F940EDA519EB6&ab_channel=OVERSEA");
      break;
    case "lofi":
      myIframe.setAttribute(
        "src",
        "https://www.youtube.com/watch?v=32CYcqFt1-8&list=PLUjbpfyneWKITlbjiGj3ybzeSqG1zl6Hl&ab_channel=ChillRadio"
      );
      break;
    case "phonk":
      myIframe.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=PLliiMqsVIF-OPMfR4mlwvdVLMp9ko0QKY")
      break;
    case "index":
      window.location.href = "index.html";
      break;
  }
}
// myIframe.setAttribute("src", "");
