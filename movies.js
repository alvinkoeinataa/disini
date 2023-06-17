let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.getElementById("tutup");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`../disney/movies/f${index - 1}.png`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
