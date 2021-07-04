async function gallery() {
  let galeryImages = document.getElementById("imgArea");
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  let data = await response.json();
  let myGallery = "";
  for (let i = 1; i < 100; i++) {
    myGallery += `
            <div id="imageContainer">
                <img id="main" src="${data[i].url}" alt="Product's photo">
                <img id="heart" src="img/favorite.png" alt="Your favorite items">
                <img id="addlist" src="img/addlist.png" alt="Your addlist">
                <div class="imgTitle">${data[i].title}</div>
                <a href="#" class="imgSubtitle">${data[i].thumbnailUrl}</a>
                <div id="price">Price :$$$</div>
                <div id="sales">Sales :<i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>(Number)</div>
                <button id="previewBtn">Preview</button>
                <img id="cart" src="img/cart.png" alt="The items that you choose">
            </div>`;
    galeryImages.innerHTML = myGallery;
  }
}

gallery();
