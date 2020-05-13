const imgs = [
  "https://lh3.googleusercontent.com/u/0/d/1UQmdhzWHDeQWYcbR16iCp6FE5zwC5BiL=w820-h625-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1d5uG3QyNLXX-sbfC8EUW6V-NlzJ9uxyz=w200-h190-p-k-nu-iv1",
  "https://lh3.googleusercontent.com/u/0/d/136hHNXxyaoReJb5jVINwfBVoNzmWSHh6=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1joSsLCWghTYtSbQETPhDAE1dtBkFK6P-=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1iErbMQb-zBDA5hjXISnpVe03GbOLiPH_=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1vexE_8-bLbyZRYfnLwL0mH5BbjJOz4V5=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1UqDfUroULWKmRGVeErqXUDzWed6wowsO=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1_zF9UWz8GNJld348AJUU4_lKc4-95IyU=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/12IT2oQHHi8mqqYdP_ztYAD57crzcORVG=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/15n4MSeR9gr3joc2YELJi6GpyezhL3R_L=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1dGW1bch7ZbRRlbwbQjm7vQ5tccS6hT2E=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1v6kG2DAFBoExoLEmK_w_WTZGWKsdCy2A=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/180t7DIu-ak2I_upp8yQX5vQ9PnHphs14=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/176AKlgNod7LLd5Sc_G4fE-uXiINTfW7Q=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/13HPBpxxGBtLEtX5-ACrP4G_ZaUErguZ6=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1aDhYaPnIfmc0N1wfXdNidJAGSAFXkFIW=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1B5nupR20TbdnjIBxXJSl7pz2PRRyCfg7=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1RpxVZhFXjyzB1p_I-JytgjYIXA70VCf9=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1xWAN28EvHu4rLsw8_qLOXqpk59YTmxD4=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/16qBTrPwj4BwbKieQzZnb0J_xgIWyc6mL=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1QmGOkT8ER4sOrKgJfkAzKuHc5AXNIc4D=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1qNkypnweQMlhpL_UL5lU46EXqZfh6-in=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1RkBIbCiajXso42Kg0i83LnVOZYPeairV=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1y2QAa7JsEYkeCxsqb6kkiNEWVMvHUAGh=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1ymCGRIaMJW-XUA0z-hFLDX8Vgf4EN9tP=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1QTwz8y-95axmn_m5xsv2FWe6s7qOPKbl=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/13xAEjGt2sPUtvos3zlpPd2O3B3d7HFhw=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1wblJtxn3CoHZMF80GJZ_Ew_pXinJaDy0=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1QcXHP6t-4YVgHvO_oaCNvzsYF7PUyQsE=w820-h609-iv1",
  "https://lh3.googleusercontent.com/u/0/d/1QtgQnuqMp8sEclJvxxy8_TnRyJgABCJ0=w820-h609-iv1",
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
