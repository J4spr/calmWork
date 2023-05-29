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

// const type1 = 'gif1.gif';
// const type2 = 'gif2.gif';
// const type3 = 'gif3.gif';.


// // Use type1
// console.log(`../assets/gifs/${type1}`);

// // Use type2
// console.log(`../assets/gifs/${type2}`);

// // Use type3
// console.log(`../assets/gifs/${type3}`);

// let array = [type1, type2, type3];