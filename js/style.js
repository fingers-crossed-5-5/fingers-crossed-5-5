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

// Get the value of the selected radio buttons
const checkboxs = document.getElementsByName('finger'); // Assuming all radios share the name 'input'
let inputValue = 0;

// Loop to find the selected radio button
checkboxs.forEach(checkbox => {
  if (checkbox.checked) {
    inputValue = parseInt(checkbox.value, 10); // Convert the value to an integer
    // Define the variables with their respective values
let a = 1;
let b = 10;
let c = 100;
let d = 1000;
let e = 10000;

// Check the conditions and redirect accordingly
if (e >= 10000) {
    window.location.href = '4finger.html';
} else if (c + d + e >= 11100) {
    window.location.href = 'aimfinger.html';
} else if (b + c >= 110) {
    window.location.href = 'iloveufinger.html';
} else if (a + e >= 10001) {
    window.location.href = 'salutefinger.html';
} else if (a + b + e >= 10011) {
    window.location.href = 'peacefinger.html';
} else if (b + c + d >= 10011) {
    window.location.href = '666finger.html';
} else if (a + b + c + d + e >= 11111) {
    window.location.href = 'italyhand.html';
} else if (a + b + c + d >= 11110) {
    window.location.href = 'promisefinger.html';
} else if (b + c + d + e >= 11110) {
    window.location.href = 'thumbfinger.html';
} else if (a + c + d + e >= 11101) {
    window.location.href = 'pointfinger.html';
} else if (a + b + d + e >= 11011) {
    window.location.href = 'middlefinger.html';
} else if (a + c + d >= 1101) {
    window.location.href = 'rockfinger.html';
} else if (d + e >= 11000) {
    window.location.href = 'okfinger.html';
} else if (a + d >= 11000) {
    window.location.href = 'okfinger.html';
} else {
    window.location.href = 'main_page.html';
}



document.getElementById('press_ok_button').addEventListener('click', function () {
  // Select all checkbox buttons with the name 'color'
  const radios = document.getElementsByName('finger');

  // Find the checked checkbox button
  let selectedValue = a;
  for (const checkbox of checkboxs) {
    if (checkbox.checked) {
      selectedValue = checkbox.value;
      break;
    }
  }

  // Display the result or handle accordingly
  if (selectedValue) {
    console.log('Selected value:', selectedValue);
  } else {
    console.log('No checkbox button selected');
  }
});
  }
});


