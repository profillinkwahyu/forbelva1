const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.transform = `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px)`;
});

yesBtn.addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("memories").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("flowers").classList.remove("hidden");
  }, 3000);

  setTimeout(() => {
    document.getElementById("music").classList.remove("hidden");
  }, 6000);

  setTimeout(() => {
    document.getElementById("letter").classList.remove("hidden");
  }, 9000);
});

