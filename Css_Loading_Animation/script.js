function startLoading() {
    const circle = document.getElementById("circle");
    const dots = document.getElementById("dots");
    const bars = document.getElementById("bars");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    // Show all loaders
    circle.style.display = "block";
    dots.style.display = "block";
    bars.style.display = "block";

    let progress = 0;

    // Fake API simulation
    let interval = setInterval(() => {
        progress++;

        progressBar.style.width = progress + "%";
        progressText.innerText = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);

            // Hide loaders
            circle.style.display = "none";
            dots.style.display = "none";
            bars.style.display = "none";

            alert("API Data Loaded Successfully!");
        }
    }, 50); // speed
}
