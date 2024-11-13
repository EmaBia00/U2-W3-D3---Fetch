// Rimozione della card
const removeBook = (card) => {
  card.remove();
};

function loadBooks() {
  // Chiamata FETCH GET
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((booksObj) => {
      const booksContainer = document.getElementById("books-container");

      booksObj.forEach((book) => {
        // Creazione della card
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Immagine del libro
        const img = document.createElement("img");
        img.src = book.img;
        img.alt = book.title;
        img.classList.add("img-fluid");
        img.style.height = "500px";

        // Titolo del libro
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = book.title;

        // Prezzo del libro
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = `${book.price} €`;

        // Creazione bottone "Scarta"
        const rmBtn = document.createElement("button");
        rmBtn.classList.add("btn", "btn-danger");
        rmBtn.innerText = "Scarta";
        rmBtn.onclick = () => removeBook(card);

        // Titolo, prezzo e bottone nella card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(rmBtn);

        // Img e cardBody nella card
        card.appendChild(img);
        card.appendChild(cardBody);

        // Card nella pagina
        cardContainer.appendChild(card);
        booksContainer.appendChild(cardContainer);
      });
    })
    .catch((error) => {
      console.error("Error!!! loading data:", error);
    });
}

// Caricamento dei libri al caricamento della pagina
window.onload = loadBooks;
