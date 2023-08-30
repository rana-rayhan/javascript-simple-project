const cardSection = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLive = "Unlimited";

//adding player lives
playerLivesCount.textContent = playerLive;

//Cards data as a array of object
const getData = () => [
  { name: "insta", img: "./logos/insta.png" },
  { name: "netflix", img: "./logos/netflix.png" },
  { name: "raw", img: "./logos/starbucks.png" },
  { name: "spo", img: "./logos/spo.png" },
  { name: "twr", img: "./logos/twr.png" },
  { name: "wwe", img: "./logos/telegram.png" },
  { name: "insta", img: "./logos/insta.png" },
  { name: "netflix", img: "./logos/netflix.png" },
  { name: "raw", img: "./logos/starbucks.png" },
  { name: "spo", img: "./logos/spo.png" },
  { name: "twr", img: "./logos/twr.png" },
  { name: "wwe", img: "./logos/telegram.png" },
];

//randomize or sufflling
const randomCard = () => {
  const allData = getData();
  allData.sort(() => Math.random() - 0.5);
  return allData;
};

// genarate card into HTML section
const cardGenaretor = () => {
  const cardData = randomCard();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    //include img to card face
    face.src = item.img;
    //adding class into card
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //card atribute
    card.setAttribute("name", item.name);

    //adding cards into a section
    cardSection.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    //adding click eventListner
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");

      // card matching function
      chackedCard(e);
    });
    //
  });
};

// matching the cards
const chackedCard = (e) => {
  const clickedCard = e.target;
  //adding class to flipped card
  clickedCard.classList.add("flipped");
  //selecting flipped cards
  const flippedCard = document.querySelectorAll(".flipped");

  if (flippedCard.length === 2) {
    if (
      flippedCard[0].getAttribute("name") ===
      flippedCard[1].getAttribute("name")
    ) {
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

//start from here
cardGenaretor();
