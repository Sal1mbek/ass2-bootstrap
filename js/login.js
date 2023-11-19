function populateUserTable() {
    var tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Очищаем содержимое таблицы
    var users = JSON.parse(localStorage.getItem("users")) || [];

    for (var i = 0; i < users.length; i++) {
        (function (index) {
            var user = users[index];
            var row = document.createElement("tr");

            var cell1 = document.createElement("td");
            cell1.textContent = user.firstName;
            row.appendChild(cell1);

            var cell2 = document.createElement("td");
            cell2.textContent = user.lastName;
            row.appendChild(cell2);

            var cell3 = document.createElement("td");
            cell3.textContent = user.email;
            row.appendChild(cell3);

            var cell4 = document.createElement("td");
            cell4.textContent = user.dob; // Дата рождения
            row.appendChild(cell4);

            var cell5 = document.createElement("td");
            cell5.textContent = user.gender; // Пол пользователя
            row.appendChild(cell5);

            var cell6 = document.createElement("td");
            cell6.textContent = user.password; // Скрытый пароль
            row.appendChild(cell6);

            var cell7 = document.createElement("td");
            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("btn", "btn-primary", "btn-sm");
            editButton.onclick = function () {
                editUser(index);
            };
            cell7.appendChild(editButton);

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("btn", "btn-danger", "btn-sm");
            deleteButton.onclick = function () {
                deleteUser(index);
            };
            cell7.appendChild(deleteButton);

            row.appendChild(cell7);

            tableBody.appendChild(row);
        })(i);
    }
}

function editUser(index) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users[index];

    var newName = prompt("Enter new first name:", user.firstName);
    var newLastName = prompt("Enter new last name:", user.lastName);
    var newEmail = prompt("Enter new email:", user.email);
    var newDob = prompt("Enter new date of birth:", user.dob);
    var newGender = prompt("Enter new gender:", user.gender);

    if (newName && newLastName && newEmail && newDob && newGender) {
        user.firstName = newName;
        user.lastName = newLastName;
        user.email = newEmail;
        user.dob = newDob;
        user.gender = newGender;
        localStorage.setItem("users", JSON.stringify(users));
        populateUserTable();
    }
}

function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    var tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
    populateUserTable();
}

window.onload = populateUserTable;
