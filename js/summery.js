const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'red'
secondSection.style.backgroundColor = 'pink'

// document.querySelectorAll
// document.queryselector

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'This is dynamic text added by javascript'
secondList.appendChild(li);

// ==============>
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>This is the dynamic section added by js</h1>
    <p>Extra text added in paragraph</p>
    <ul>
        <li>Dynamic List Item</li>
        <li>Dynamic List Item</li>
        <li>Dynamic List Item</li>
        <li>Dynamic List Item</li>
        <li>Dynamic List Item</li>
    </ul>
`
main.appendChild(section);