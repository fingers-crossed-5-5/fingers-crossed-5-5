const small_finger_button = document.getElementById("small_finger_button");
const small_finger_image = document.getElementById("small_finger_picture");
      
small_finger_button.addEventListener("click", () => { 
    small_finger_image.src = "./img/small_finger_closed.png";
});

const noname_finger_button = document.getElementById("noname_finger_button");
const noname_finger_image = document.getElementById("noname_finger_picture");
      
noname_finger_button.addEventListener("click", () => { 
    noname_finger_image.src = "./img/noname_finger_closed.png";
});

const middle_finger_button = document.getElementById("middle_finger_button");
const middle_finger_image = document.getElementById("middle_finger_picture");
      
middle_finger_button.addEventListener("click", () => { 
    middle_finger_image.src = "./img/middle_finger_closed.png";
});

const index_finger_button = document.getElementById("index_finger_button");
const index_finger_image = document.getElementById("index_finger_picture");
      
index_finger_button.addEventListener("click", () => { 
    index_finger_image.src = "./img/index_finger_closed.png";
});

const mother_finger_button = document.getElementById("mother_finger_button");
const mother_finger_image = document.getElementById("mother_finger_picture");
      
mother_finger_button.addEventListener("click", () => { 
    mother_finger_image.src = "./img/mother_finger_closed.png";
});

function runLogic() {
    // Get all checkboxes
    const checkboxes = document.getElementsByName('finger');
    let sum = 0;

    // Calculate the sum of all selected checkboxes
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            sum += parseInt(checkbox.value, 10); // Convert value to an integer
        }
    });

    // Define the conditions and redirect accordingly
    if (sum >= 10000 && sum === 10000) {
        window.location.href = "./4finger.html";
    } else if (sum >= 11100) {
        window.location.href = 'aimfinger.html';
    } else if (sum >= 110) {
        window.location.href = 'iloveufinger.html';
    } else if (sum >= 10001) {
        window.location.href = 'salutefinger.html';
    } else if (sum >= 10011) {
        window.location.href = 'peacefinger.html';
    } else if (sum >= 10011) {
        window.location.href = '666finger.html';
    } else if (sum >= 11111) {
        window.location.href = 'italyhand.html';
    } else if (sum >= 11110) {
        window.location.href = 'promisefinger.html';
    } else if (sum >= 11110) {
        window.location.href = 'thumbfinger.html';
    } else if (sum >= 11101) {
        window.location.href = 'pointfinger.html';
    } else if (sum >= 11011) {
        window.location.href = 'middlefinger.html';
    } else if (sum >= 1101) {
        window.location.href = 'rockfinger.html';
    } else if (sum >= 11000) {
        window.location.href = 'okfinger.html';
    } else if (sum >= 0) {
        window.location.href = '0finger.html';
    } else {
        window.location.href = 'main_page.html';
    }
}


