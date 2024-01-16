// Создать div
const element = document.createElement('div')

// Добавить к нему класс wrapper
element.classList.add('wrapper')
// Поместить его внутрь тэга body
document.body.append(element)
// Создать заголовок H1 "DOM (Document Object Model)"
const title = document.createElement('h1')
title.textContent = "DOM (Document Object Model)"
// Добавить H1 перед DIV с классом wrapper
element.insertAdjacentElement('beforebegin', title)
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const list = `
<ul>
<li>один</li>
<li>два</li>
<li>три</li>
`;

// Поместить список внутрь элемента с классом wrapper
// element.append(list)
element.innerHTML = list
// =================================================
// Создать изображение
const img = document.createElement("img")
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'https://ya.ru/images/search?img_url=https%3A%2F%2Fimages4.alphacoders.com%2F100%2F1001740.jpg&lr=10696&pos=0&rpt=simage&source=serp&text=superman%20photo';
// 2. Добавить атрибут width со значением 240
img.width = 240
// 3. Добавить класс super
img.classList.add('super')
// 4. Добавить свойство alt со значением "Super Man"
img.alt = "Super Man"
// Поместить изображение внутрь элемента с классом wrapper
element.append(img)
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const newElem = `
<div class = "pDiv">
<p>Параграф 1</p>
<p>Параграф 2</p>
</div>
`;
// Поместить этот DIV до элемента <ul></ul>
const ulList = document.querySelector("ul")
ulList.insertAdjacentHTML('beforebegin', newElem)
// Добавить для 2-го параграфа класс text
const newElemWrap = document.querySelector(".pDiv")
newElemWrap.children[1].classList.add('text')
// Удалить 1-й параграф
newElemWrap.children[0].remove()
// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const fulDate = curDate.getFullYear();
    return `
    <div class="autoCard">
        <div>
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль: ${brand.toUpperCase()} - ${year} года. Возраст авто - ${fulDate - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type='button' class='btn'>Удалить</button>
        </div>
    </div>
    `;
}
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const cars = document.createElement("div")
cars.classList.add("autos")
console.log(cars)
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');
console.log(carsHTML)
// Поместить эти 3 карточки внутрь DIV с классом autos
cars.innerHTML = carsHTML;
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
element.insertAdjacentElement('beforebegin', cars)
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons = document.querySelectorAll(".btn")
// 2. Создать функцию удаления
function handlerclick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', handlerclick)
})