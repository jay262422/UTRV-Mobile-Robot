document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Simulating authentication process
        if (username === "admin" && password === "password") {
            window.location = "index.html"; // Redirect to main page
        } else {
            document.getElementById("errorMessage").textContent = "Invalid username or password.";
        }
    });
});
