// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const newHeader = document.querySelector('.header-container');

newHeader.appendChild(Header('.header-container'));

function Header() {

    //define new elements 

    const container = document.createElement('div');
    const button1 = document.createElement('span');
    const title = document.createElement('h1');
    const button2 = document.createElement('span');

    //set up the structure of the elements

    container.append(button1, title, button2);

    //add classes to the elements

    container.classList.add('header');
    button1.classList.add('date');
    button2.classList.add('temp');

    //set content of the elements

    button1.textContent = 'date';
    title.textContent = 'Lambda Times';
    button2.textContent = 'time';

    return container;
}

