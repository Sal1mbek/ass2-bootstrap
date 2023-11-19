//Main page-----------------------

// Timer or countdown functionality
var count = 60;
var timer = setInterval(function() {
    count--;
    if (count <= 0) {
        clearInterval(timer);
        alert("Extend session");
    } else {
        console.log(count);
        }
    }, 1000);

function showAlert() {
    alert('You have found a hidden hint on our website, so we offer you a 1% discount on any purchase!');
}
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    return true;
}


//Models-----------------------
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
       
const wishes = [];

function requestFeedback() {
    while (true) {
        const userResponse = prompt("Do you have any wishes to add information to our site? (yes/no)");

        if (userResponse === null) {
            alert("Thank you for visiting our site!");
            break;
        }

        if (userResponse.toLowerCase() === "yes") {
            const userWish = prompt("Enter your wishes:");

            if (userWish === null) {
                alert("Your request has been cancelled.");
            } else if (userWish.trim() === "") {
                alert("Please enter your wishes.");
            } else {
                wishes.push(userWish);
                alert("Thank you for your wishes! We will take them into account.");
                break;
            }
        } else if (userResponse.toLowerCase() === "no") {
            alert("Got it, thanks for your answer.");
            break;
        } else {
            alert("Please enter 'yes' or 'no'.");
        }
    }
}

function showWishes() {
    const wishesContainer = document.getElementById("wishesContainer");
    const wishesList = document.getElementById("wishesList");

    if (wishes.length > 0) {
        wishesList.innerHTML = wishes.map(wish => `<li>${wish}</li>`).join("");
        wishesContainer.style.display = "block";
    } else {
        alert("There are no saved wishes yet.");
    }
}
//Slider
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});