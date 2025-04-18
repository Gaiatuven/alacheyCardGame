"use strict";

const imageList = [
  "img/Azure.jpg",
  "img/Cordy.jpg",
  "img/Leona.jpg",
  "img/Odi.jpg",
  "img/Uriel.jpg",
  "img/Victoria.jpg",
  "img/Background 2.jpg",
  "img/Frostfire.jpg",
  "img/Mythos.jpg",
  "img/Philyshy.jpg",
  "img/Vice.jpg",
];

const selectBtn = document.querySelectorAll(".select-character");
const selectBtn2 = document.querySelectorAll(".select-character2");
const setImage = document.querySelector(".card-one-image");
const setImage2 = document.querySelector(".card-two-image");

const infoBar = document.querySelector('.information-bar');

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}

selectBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let randomImage = getRandomImage();
    setImage.src = `${randomImage}`;
    image = `${randomImage}`;
  });
});

selectBtn2.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let randomImage2 = getRandomImage();
    setImage2.src = `${randomImage2}`;
    image2 = `${randomImage2}`;
  });
});

console.log(image);
console.log(image2);
