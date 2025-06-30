// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");

    if (name && email && email.includes("@")) {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter valid details.";
        message.style.color = "red";
    }
});

// To-Do List
function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove();  // click to remove
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}