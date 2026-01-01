function signup() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    if (username === "" || password === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required";
        return;
    }

    let admins = JSON.parse(localStorage.getItem("admins")) || [];

    let exists = admins.find(a => a.username === username);
    if (exists) {
        msg.style.color = "red";
        msg.innerText = "Username already exists";
        return;
    }

    admins.push({ username, password });
    localStorage.setItem("admins", JSON.stringify(admins));

    msg.style.color = "green";
    msg.innerText = "Signup successful! Redirecting...";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}
