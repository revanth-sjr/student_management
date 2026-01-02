if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

document.getElementById("adminName").innerText =
    "Admin: " + localStorage.getItem("loggedAdmin");

let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let dept = document.getElementById("dept").value.trim();

    if (!name || !roll || !dept) {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, roll, dept });
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    clearFields();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s, i) => {
        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.dept}</td>
            <td><button onclick="deleteStudent(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteStudent(i) {
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function clearFields() {
    name.value = roll.value = dept.value = "";
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedAdmin");
    window.location.href = "login.html";
}

displayStudents();
