"use strict";
//Задача 1 ====================================
// const someBlock = document.querySelector(".block");
// const someText = document.createElement("div");
// someText.classList.add("item");
// someText.textContent = "Элемент внутри";
// someText.style.color = "blue";
// someText.style.border = "1px solid black";
// someText.style.backgroundColor = "#f8f8f8";
// someText.style.padding = "16px";
// someBlock.append(someText);
// someText.setAttribute("class", "item item_1");

//Задача 2 ====================================
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const text = document.querySelector(".text"),
//   elem = document.querySelector(".elem"),
//   parentElem = elem.parentElement,
//   content = text.parentElement,
//   img = content.previousElementSibling,
//   title = text.previousElementSibling;
// console.log(title);
// console.log(content);
// console.log(img);
// console.log(parentElem);

//Задача 3 ==================================
// с помощью querySelector найти h2 и вывести в консоль всех его родителей

// const h2El = document.querySelector('h2');
// let currentEl = h2El;

// while (currentEl.parentElement !== null) {
// currentEl = currentEl.parentElement;
// console.log(currentEl);
// }

//  Задача 4 =========================================
//Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// У поля ввода должна появиться рамка красного цвета

const registrationForm = document.querySelector(".registrationForm");
const message = document.createElement("h2");
registrationForm.appendChild(message);

function printErrorMessage() {
  const textInput = document.querySelector(".name");
  if (textInput.value === "") {
    textInput.classList.add("error");
    message.textContent = "Вы не заполнили поле ввода";
  }
}

function clearErrorMessage() {
  const textInput = document.querySelector(".name");
  textInput.classList.remove("error");
  message.textContent = "";
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  printErrorMessage();
});

const btnReset = document.querySelector(".btnReset");
btnReset.addEventListener("click", function () {
  clearErrorMessage();
});
