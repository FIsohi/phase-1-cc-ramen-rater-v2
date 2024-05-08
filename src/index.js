const API = "http://localhost:3000/ramens";

el("new-ramen").addEventListener("submit", createNewRamen);

//Load in the ramens from the API
fetch(API)
.then((res) => res.json())
.then(renderRamens);

//Iterate through each of the ramens
function renderRamens(ramens) {
  ramens.forEach(renderRamen);
}

//Display each one in an image tag in the ramen-menu div
function renderRamen(ramen) {
  const ramenMenuDiv = el("ramen-menu");

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  ramenImage.addEventListener("click", (e) => renderDetails(ramen));
}

function renderDetails(ramen) {
  const detailImage = el("detail-image");
  const ramenName = el("ramen-name");
  const restaurantName = el("restaurant-name");
  const ratingDisplay = el("rating-display");
  const commentDisplay = el("comment-display");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textcontent = ramen.name;
  restaurantName.textcontent = ramen.restaurant;
  ratingDisplay.textcontent = ramen.rating;
  commentDisplay.textcontent = ramen.comment;
}

function createNewRamen(e) {
  e.preventDefault();

  const newRamen = {
    name: e.target.name.value,
    rating: e.target.rating.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    comment: e.target("new-comment").value,
  };
  renderRamen(newRamen);
  e.target.clear();

}

function el(elementName) {
  return document.getElementById(elementName);

}