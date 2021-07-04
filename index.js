let cardSec = document.querySelector(".card-sec")

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
        let cardDiv1 = document.createElement("div");
        cardDiv1.setAttribute("class", "d-grid gap-2 col 6 mx-auto");
        let cardDiv2 = document.createElement("div");
        cardDiv2.setAttribute("class", "card mb-3");
        cardDiv2.setAttribute("style","max-width:540px;");
        let cardDiv3 = document.createElement('div');
        cardDiv3.setAttribute("class", "row g-0");
        let cardDiv4 = document.createElement('div');
        cardDiv4.setAttribute("style","col-md-4");
        let cardIMG = document.createElement("img");
        cardIMG.setAttribute("class","img-fluid rounded-start");
        cardIMG.setAttribute("src", "");
        let cardDiv5 = document.createElement("div");
        cardDiv5.setAttribute("class", "col-md-8");
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.innerText = ghibliData[i].title;
        let cardPTag = document.createElement("p");
        cardPTag.innerText = ghibliData[i].description;
        let cardPTag2 = document.createElement("p");
        cardPTag2.setAttribute("class","card-text");
        cardPTag2.innerText = `Director: ${ghibliData[i].director}`;

        cardSec.appendChild(cardDiv1);
        cardDiv1.appendChild(cardDiv2);
        cardDiv2.appendChild(cardDiv3);
        cardDiv3.appendChild(cardDiv4);
        cardDiv4.appendChild(cardIMG);
        cardDiv4.appendChild(cardDiv5);
        cardDiv5.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPTag);
        cardBody.appendChild(cardPTag2);
    }
}