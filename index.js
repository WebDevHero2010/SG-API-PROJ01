let cardSec = document.getElementById("card-sec")

function getApiData() {
  fetch(`https://ghibliapi.herokuapp.com/films`)
    .then((response) => response.json())
    .then((result) => displayData(result))
    .catch((error) => console.log(error));
}

getApiData();

function displayData(ghibliData) {

    for(let i = 0; i < ghibliData.length; i++) {
         console.log(ghibliData[i]);

         let cardDiv1 = document.createElement('div');
         cardDiv1.setAttribute("class","col mb-4");
         let cardElement = document.createElement('div');
         cardElement.setAttribute("class","card");
         let cardBody = document.createElement('div');
         cardBody.setAttribute("class","card-body");
         let cardTitle = document.createElement('h5');
         cardTitle.innerText =`${ghibliData[i].title} (${ghibliData[i].release_date})`;
         let cardPTag = document.createElement("p");
         cardPTag.innerText = ghibliData[i].description;
         let cardPTag2 = document.createElement("p");
         cardPTag2.setAttribute("class","card-text");
         cardPTag2.innerText = `Director: ${ghibliData[i].director}`;

         cardSec.appendChild(cardDiv1);
         cardDiv1.appendChild(cardElement);
         cardElement.appendChild(cardBody);
         cardBody.appendChild(cardTitle);
         cardBody.appendChild(cardPTag);
         cardBody.appendChild(cardPTag2);
    }
}