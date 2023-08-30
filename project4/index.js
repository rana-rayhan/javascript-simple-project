// create an array of image objects
const allCard = [
  { name: "insta", img: "./logos/insta.png" },
  { name: "netflix", img: "./logos/netflix.png" },
  { name: "raw", img: "./logos/starbucks.png" },
  { name: "spo", img: "./logos/spo.png" },
  { name: "twr", img: "./logos/twr.png" },
  { name: "wwe", img: "./logos/telegram.png" },
];

// select card section by Id
const cardParent = document.querySelector(".container");
// const doubleCard = doubleCard1.concat(doubleCard1);
const doubleCard = allCard.concat(allCard);

const shuffleArray = (array) => {
  for (let x = array.length - 1; x > 0; x--) {
    let j = Math.floor(Math.random() * (x + 1));
    let temp = array[x];
    array[x] = array[j];
    array[j] = temp;
  }
  return array;
};

const randcard = shuffleArray(doubleCard);

let count = 0;
let firstCard = "";
let secondCard = "";

const match = () => {
  let cardSelected = document.querySelectorAll(".selected-card");
  cardSelected.forEach((element) => {
    element.classList.add("match");
  });
};

const resetcount = () => {
  count = 0;
  let cardSelected = document.querySelectorAll(".selected-card");
  cardSelected.forEach((element) => {
    element.classList.remove("selected-card");
  });
};

cardParent.addEventListener("click", (event) => {
  const clickedDiv = event.target;
  if (clickedDiv.id === "card-section") {
    return false;
  }
  count++;
  if (count < 3) {
    if (count === 1) {
      firstCard = clickedDiv.dataset.name;
      clickedDiv.classList.add("selected-card");
    } else {
      secondCard = clickedDiv.dataset.name;
      clickedDiv.classList.add("selected-card");
    }
    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        // clickedDiv.classList.add("match");
        match();
        resetcount();
      }
    }
  }

});

for (let x = 0; x < randcard.length; x++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.dataset.name = randcard[x].name;
  cardDiv.style.backgroundImage = `url(${randcard[x].img})`;

  cardParent.appendChild(cardDiv);
}
