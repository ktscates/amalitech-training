// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const adviceNumber = document.getElementById("advice-number");
  const adviceText = document.getElementById("advice-text");
  const newAdviceButton = document.getElementById("new-advice-button");

  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const advice = data.slip;

      adviceNumber.textContent = `Advice #${advice.id}`;
      adviceText.textContent = `"${advice.advice}"`;
    } catch (error) {
      adviceText.textContent = "Oops! Something went wrong. Try again later.";
      console.error("Error fetching advice:", error);
    }
  }

  newAdviceButton.addEventListener("click", fetchAdvice);

  // Fetch advice on initial load
  fetchAdvice();
});
