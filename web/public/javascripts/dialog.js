document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll(".movie-card");
    const dialog = document.getElementById("ligthbox");
    const dialogImage = dialog.querySelector("img");
    const dialogForm = dialog.querySelector("form");
    const dialogTitle = document.createElement("h1");
    dialogForm.insertBefore(dialogTitle, dialogImage);
  
    movieCards.forEach((card) => {
      card.addEventListener("click", () => {
        const movieImageSrc = card.querySelector("img").src;
        const movieTitle = card.querySelector("p").textContent;
  
        dialogImage.src = movieImageSrc;
        dialogImage.alt = movieTitle;
        dialogTitle.textContent = movieTitle; 
  
        dialog.showModal();
      });
    });
  
    dialogForm.querySelector("button").addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close();
    });
  });