const t1 = document.getElementById('task1');

t1.innerText = 'What are you looking at?';

const t2 = document.getElementById('task2');

t2.innerHTML = '<button>Submit</button>';

const page = document.querySelector('body');

page.style.backgroundColor = '#232323';

const items = document.querySelectorAll(".item");

items.forEach(el => {
  el.style.border = "2px solid white";
});

const t5 = document.getElementById('task5');

t5.setAttribute("href", "https://www.springboard.com/");

const t6 = document.getElementById('task6');

t6.value = 'DOM Master';

const t7 = document.getElementById('task7');

t7.classList.add('new-class');

const t8 = document.getElementById('task8');

const btn = document.createElement('button');
btn.textContent = "Hello";
t8.append(btn);

const t9 = document.getElementById('task9');

t9.remove();


