// Function to store information about the currently logged-in user
function setLoggedInUser(email) {
    localStorage.setItem("loggedInUser", email);
}

function signIn() { 
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value; 

    var users = JSON.parse(localStorage.getItem("users")) || []; 
    var user = users.find(u => u.email === email && u.password === password); 

    if (user) {
        alert("Sign in successful!");

        setLoggedInUser(user.email);

        if (user.email === "admin2023@gmail.com" && user.password === "@Dmin2023") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "main_pageg.html";
        }
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function signUp() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Проверка пароля
    if (validatePassword(password)) {
        var user = { firstName: firstName, lastName: lastName, email: email, password: password, dob: dob, gender: gender };
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "signin.html";

    } else {
        alert("Password does not meet the requirements. Please ensure it is at least 8 characters long and includes at least 1 uppercase letter, 1 digit, and 1 special character (#, @, &, $, !).");
    }
}

// Функция для проверки пароля
function validatePassword(password) {
    // Пароль должен быть не менее 8 символов
    if (password.length < 8) {
        return false;
    }

    // Проверка на наличие заглавной буквы
    var uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        return false;
    }

    // Проверка на наличие цифры
    var digitRegex = /\d/;
    if (!digitRegex.test(password)) {
        return false;
    }

    // Проверка на наличие специального символа
    var specialCharRegex = /[#@&$!]/;
    if (!specialCharRegex.test(password)) {
        return false;
    }

    // Все проверки пройдены
    return true;
}