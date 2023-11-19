// Функция для загрузки данных профиля из localStorage
function loadProfile() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var loggedInUser = users[users.length - 1]; // Последний добавленный пользователь (последний зарегистрированный)
    var profileInfo = document.getElementById("profileInfo");

    if (loggedInUser) {
        profileInfo.innerHTML = `
            <p><strong>First Name:</strong> ${loggedInUser.firstName}</p>
            <p><strong>Last Name:</strong> ${loggedInUser.lastName}</p>
            <p><strong>Email:</strong> ${loggedInUser.email}</p>
            <p><strong>Date of Birth:</strong> ${loggedInUser.dob}</p>
            <p><strong>Gender:</strong> ${loggedInUser.gender}</p>
        `;
    } else {
        // Пользователь не найден, может потребоваться перенаправление на страницу входа
        // window.location.href = "C:\\Users\\daniy\\OneDrive\\Рабочий стол\\web\\bootstrap\\signin.html";
    }
}

// Функция для выхода из учетной записи (удаления данных из localStorage)
function logout() {
    alert("Logged out successfully!");
    // Перенаправление на страницу входа
    window.location.href = "signin.html";
}

// Загрузка данных профиля при загрузке страницы
window.onload = loadProfile;
