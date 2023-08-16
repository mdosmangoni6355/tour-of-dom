// 1. where to add
const placesList = document.getElementById("fruits-list");
// 2. what to be add
const li = document.createElement("li");
li.innerText = "Papaya"

// 3. Add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById('main-container');
// 2. what to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'This is new section'
section.appendChild(h1);

const ul = document.createElement('ul');

const li2 = document.createElement('li');
li2.innerText = 'list item 2'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'list item 3'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'list item 4'
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'list item 5'
ul.appendChild(li5);

// 3. add the child
section.appendChild(ul);

mainContainer.appendChild(section);


// Set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>New Dress list</h1>
<ul>
    <li>T-Shrit</li>
    <li>Lungi</li>
    <li>Pant</li>
</ul>
`
mainContainer.appendChild(sectionDress);