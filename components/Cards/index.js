// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    //console.log("This is the response for cards: ")
    //console.log(response)
    response.data.articles.javascript.forEach(p => {
        cards.append(createCard(p));
    })
})
.catch(err => {
    
})

function createCard(obj){

    //create elements

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const button = document.createElement('span');

    //add classes to the elements

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //set text content

    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    button.textContent = obj.authorName;

    //set up structure of our elements

    card.append(headline, author);
    author.append(imgContainer, button)
    imgContainer.append(img);

    return card;
}


