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

axios.get ('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            newArticle(response);
        })

function newArticle(cardData) {

    let cardArray = cardData.data.articles

    for (let key in cardArray) {
        let infoArr = cardArray[key]

        for (let value in infoArr) {

            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author =  document.createElement('div');
            const authorImg = document.createElement('img');
            const imgContainer = document.createElement('div');
            const writer = document.createElement('span');

            card.appendChild(headline);
            card.appendChild(author);
            card.appendChild(authorImg);
            card.appendChild(imgContainer);
            card.appendChild(writer);

            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container');

            headline.textContent = infoArr[value].headline;
            writer.textContent = infoArr[value].authorName;
            authorImg.src = infoArr[value].authorPhoto;

            const entryPoint = document.querySelector('.cards-container');
            entryPoint.appendChild(card);
        };
    }

}