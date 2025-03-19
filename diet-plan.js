// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get URL Parameters
    const params = new URLSearchParams(window.location.search);
    let name = params.get("name");
    const weight = parseInt(params.get("weight"));
    const goal = params.get("goal");

    // Default name fallback if null
    if (!name) {
        name = "User";
    }

    // Set Welcome Message
    document.getElementById("welcome-message").textContent = `Hey ${name}! Here's your custom plan 🎯`;

    // Generate Personalized Plan
    let planMessage = "";

if (goal === "weight_loss") {
    if (weight >= 70) {
        planMessage = `
            <ul>
                <li>Focus on a calorie deficit diet.</li>
                <li>Increase high-protein & fiber intake.</li>
                <li>Start with light workouts (walking, yoga).</li>
                <li>Stay hydrated and reduce processed foods.</li>
            </ul>`;
    } else {
        planMessage = `
            <ul>
                <li>You're already on a good track!</li>
                <li>Maintain a balanced diet.</li>
                <li>Engage in moderate exercise regularly.</li>
            </ul>`;
    }
} else if (goal === "muscle_gain") {
    planMessage = `
        <ul>
            <li>Increase protein intake (eggs, chicken, paneer).</li>
            <li>Strength training is a must (weight lifting).</li>
            <li>Eat a balanced diet with complex carbs & fats.</li>
            <li>Ensure proper rest & sleep for muscle recovery.</li>
        </ul>`;
} else {
    planMessage = `
        <ul>
            <li>Eat clean and nutritious meals.</li>
            <li>Stay hydrated throughout the day.</li>
            <li>Maintain an active lifestyle (yoga, jogging).</li>
            <li>Ensure enough sleep & stress management.</li>
        </ul>`;
}

// Insert plan into the HTML
document.getElementById("plan-text").innerHTML = planMessage;
});
