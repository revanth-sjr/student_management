function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    let admins = JSON.parse(localStorage.getItem("admins"));

    if (!admins || admins.length === 0) {
        msg.style.color = "red";
        msg.innerText = "No admin found. Please signup first.";
        return;
    }

    let validAdmin = admins.find(
        a => a.username === username && a.password === password
    );

    if (validAdmin) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedAdmin", username);
        window.location.href = "dashboard.html";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid username or password";
    }
}
