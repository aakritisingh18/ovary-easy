document.getElementById("diet-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let goal = document.getElementById("goal").value;

    if (!name || !age || !weight || !goal) {
        alert("Please enter all the mandatory fields!");
        return;
    }

    // Redirect to the diet plan page with user details in the URL
    window.location.href = `diet-plan.html?name=${encodeURIComponent(name)}&age=${age}&weight=${weight}&goal=${goal}`;
});
