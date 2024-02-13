function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Basic validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
    } else {
        // Perform actual login logic here
        // For simplicity, let's assume a hardcoded username and password
        if (username === "user" && password === "pass") {
            alert("Login successful!");
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }
}
