const imgs = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
  "img11.png",
  "img12.png",
  "img13.png",
  "img15.png",
  "img16.png",
  "img17.png",
  "img18.png",
  "img19.png",
  "img20.png",
  "img21.png",
  "img22.png",
  "img23.png",
  "img24.png",
  "img25.png",
  "img26.png",
  "img27.png",
  "img28.png",
  "img29.png",
  "img30.png",
];
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const container = document.getElementById("container");

//modals
let img = document.getElementById("img");
let modal = document.getElementById("myModal");
let flex = document.getElementById("flex");
let closeModal = document.getElementById("close");

/********************************* functions *********************************/

//change position btn-no
function changePositionBtnNo() {
  let coordinatesX = Math.floor(
    Math.random() * (container.clientWidth / 1.8 - 0) + 0
  );
  let coordinatesY = Math.floor(
    Math.random() * (container.clientHeight - 0) + 0
  );
  btnNo.style.marginTop = coordinatesX + "px";
  btnNo.style.marginLeft = coordinatesY + "px";
}

function changeImgRandom() {
  const random = Math.floor(Math.random() * imgs.length);
  console.log(random);
  img.setAttribute("src", `/img/${imgs[random]}`);
}

/********************************* assing functions *********************************/

btnNo.addEventListener("mouseenter", () => {
  changePositionBtnNo();
});
btnNo.addEventListener("click", () => {
  changePositionBtnNo();
});

//open modal
btnYes.addEventListener("click", () => {
  modal.style.display = "block";
});

//close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == flex) {
    modal.style.display = "none";
  }
});

btnYes.addEventListener("click", () => {
  changeImgRandom();
});
