function checkLogin(event) {
    event.preventDefault(); // Prevent default form submission
    <script src="script.js"></script>

    // Sample hardcoded credentials (for testing only)
    const correctEmail = "user@gmail.com";
    const correctPassword = "123";

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === correctEmail && password === correctPassword) {
        alert("Login successful! Redirecting...");
        window.location.href = "home.html"; // Change to your landing page
    } else {
        alert("Invalid email or password. Try again.");
    }
}
