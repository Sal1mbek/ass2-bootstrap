// Function to get information about the currently logged-in user
function getLoggedInUser() {
    return localStorage.getItem("loggedInUser");
}

function loadProfile() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var loggedInUserEmail = getLoggedInUser();
    var loggedInUser = users.find(u => u.email === loggedInUserEmail);
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
        // Redirect to the login page if no user is logged in
        window.location.href = "signin.html";
    }
}

// Function to log out (clear information about the logged-in user)
function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUsername")
    alert("Logged out successfully!");
    // Redirect to the login page
    window.location.href = "signin.html";
}

window.onload = loadProfile;