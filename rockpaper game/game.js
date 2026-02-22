const choice = document.querySelectorAll("button");
const result = document.getElementById("result");
const liste = ["rock", "paper", "scissors"];


choice.forEach(buton => {
    buton.addEventListener("click", function () {
        result.classList.remove("win", "lose", "draw", "shake");

        const user = this.dataset.value;
        let randomListe = liste[Math.floor(Math.random() * liste.length)];
        if (user === randomListe) {
            result.textContent = "Draw";
            result.classList.add("draw", "shake");
        } else if (
            (user === "rock" && randomListe === "scissors") ||
            (user === "paper" && randomListe === "rock") ||
            (user === "scissors" && randomListe === "paper")
        ) {
            result.textContent = ` You won! You: ${user} , Bot: ${randomListe}`;
            result.classList.add("win");
        } else {
            result.textContent = `You Lose! You: ${user}, Bot: ${randomListe}`;
            result.classList.add("lose", "shake");
        }
    });
});