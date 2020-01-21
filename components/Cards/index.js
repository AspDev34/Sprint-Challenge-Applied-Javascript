// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card"> created with class
//   <div class="headline">{Headline of article}</div> created with class
//   <div class="author"> created with class
//     <div class="img-container"> created with class
//       <img src={url of authors image} /> created
//     </div>
//     <span>By {authors name}</span> created
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {Object.values(response.data.articles).forEach(data => {
        data.forEach(data => {
        const makeNewArticle = articleCards(data);
        appendNewArticle.appendChild(makeNewArticle);
    })})})
    .catch(error => {
        console.log("Try again, something went terribly wrong!", error);
    })

function articleCards (obj){
    // create elements
    const parentDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainerDiv = document.createElement('div');
    const imgTag = document.createElement('img');
    const spanTag = document.createElement('span');

    // add classes for created elements
    parentDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');

    // Append created elements to their respective parents
    parentDiv.append(headlineDiv);
    parentDiv.append(authorDiv);
    authorDiv.append(imgContainerDiv);
    imgContainerDiv.append(imgTag);

    // pass obj data to articleCards
    headlineDiv.textContent = obj.headline;
    imgTag.src = obj.authorPhoto;
    spanTag.textContent = `By ${obj.authorName}`;

    return parentDiv;
}

// selected class from html that i'm going to append the new article to
const appendNewArticle = document.querySelector('.cards-container');




