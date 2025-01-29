function goToPage(pageNumber) {
    document.getElementById("home-page").classList.add("hidden");
    document.getElementById("selection-page").classList.add("hidden");
    document.getElementById("result-page").classList.add("hidden");

    if (pageNumber === 0) {
        document.getElementById("home-page").classList.remove("hidden");
    } else if (pageNumber === 1) {
        document.getElementById("selection-page").classList.remove("hidden");
    } else if (pageNumber === 2) {
        document.getElementById("result-page").classList.remove("hidden");
    }
}

function getSuggestion() {
    const weather = document.getElementById("weather-select").value;
    const suggestionText = document.getElementById("suggestion-text");

    let suggestion = "Select a season to get outfit suggestions.";
    switch (weather) {
        case "summer":
            suggestion = "It's too hot outside! Dress lighter: Light cotton clothes, shorts, t-shirts, sandals, sunglasses, and a sun hat.";
            break;
        case "winter":
            suggestion = "It's too chilly! Wear a warm coat, sweater, thermal wear, boots, gloves, scarf, and beanie.";
            break;
        case "autumn":
            suggestion = "The climate is not too hot! A light jacket, long-sleeve shirts, jeans, and closed-toe shoes.";
            break;
        case "rainy":
            suggestion = "Ready to get wet? Protect yourself with a raincoat, umbrella, waterproof boots, and water-resistant clothing.";
            break;
    }

    suggestionText.innerText = suggestion;
    goToPage(2);
}

// Enable the button only when a selection is made
document.getElementById("weather-select").addEventListener("change", function() {
    document.getElementById("suggestion-btn").disabled = !this.value;
});
