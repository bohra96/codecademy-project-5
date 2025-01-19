const form = document.querySelector("form");
const passwordInput = document.getElementById("inputPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the password value
  const password = passwordInput.value;

  // Create variables to track each condition
  let isLongEnough = password.length >= 8;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecial = false;

  // Check each character in the password
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    // Check for uppercase
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    // Check for lowercase
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    }
    // Check for number
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    // Check for special characters
    if (char === "@" || char === "#" || char === "$" || char === "!") {
      hasSpecial = true;
    }
  }

  let score = 0;

  if (isLongEnough) {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
    <li class="list-group-item list-group-item-success">
            Success! Your Password Has 8 or More Characters.
          </li>
    `;
    score++;
  } else {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
    <li class="list-group-item list-group-item-danger">
            Failure! Your Password Requires Minimum 8 Character.
          </li>
    `;
  }

  //Checks for lower case
  if (hasLowerCase) {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
    <li class="list-group-item list-group-item-success">
            Success! Your Password Has A Lowercase Character.
          </li>
    `;
    score++;
  } else {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
    <li class="list-group-item list-group-item-danger">
            Failure! Your Password Doesn't Have A Lowercase Character.
          </li>
    `;
  }

  //Checks for one uppercase character
  if (hasUpperCase) {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
   <li class="list-group-item list-group-item-success">
            Success! Your Has An Uppercase Character.
          </li>
    `;
    score++;
  } else {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
    <li class="list-group-item list-group-item-danger">
            Failure! Your Password Doesn't Have An Uppercase Character.
          </li>
    `;
  }

  // Validate Numericals
  if (hasNumber) {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
 <li class="list-group-item list-group-item-success">
          Success! Your Password Has A Numerical.
        </li>
  `;
    score++;
  } else {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
  <li class="list-group-item list-group-item-danger">
          Failure! Your Password Doesn't Have A Numerical.
        </li>
  `;
  }

  if (hasSpecial) {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
 <li class="list-group-item list-group-item-success">
          Success! Your Password Has A Special Character.
        </li>
  `;
    score++;
  } else {
    document.getElementById("validation-wrapper").innerHTML =
      document.getElementById("validation-wrapper").innerHTML +
      `
  <li class="list-group-item list-group-item-danger">
          Failure! Your Password Doesn't Have A Special Character.
        </li>
  `;
  }

  if (score == 5) {
    document.getElementById("progress-checker").innerHTML = `
      <div
          class="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 100%"
        >
          <div class="progress-bar bg-success">Strong! 100% Strength</div>
        </div>
    `;
    document.getElementById(
      "score"
    ).innerHTML = `<h3>Your Password is <span>Strong!</span></h3>`;
  } else if (score == 4) {
    document.getElementById("progress-checker").innerHTML = `
      <div
          class="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 75%"
        >
          <div class="progress-bar bg-info">Medium! 75% Strength</div>
        </div>
    `;
    document.getElementById(
      "score"
    ).innerHTML = `<h3>Your Password is <span>Medium!</span></h3>`;
  } else if (score == 3) {
    document.getElementById("progress-checker").innerHTML = `
      <div
          class="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 50%"
        >
          <div class="progress-bar bg-warning">Weak! 50% Strength</div>
        </div>
    `;
    document.getElementById(
      "score"
    ).innerHTML = `<h3>Your Password is <span>Weak!</span></h3>`;
  } else {
    document.getElementById("progress-checker").innerHTML = `
    <div
          class="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 25%"
        >
          <div class="progress-bar bg-danger">Too Weak! 25% Strength</div>
        </div>
  `;
    document.getElementById(
      "score"
    ).innerHTML = `<h3>Your Password is <span>Too Weak!</span></h3>`;
  }
});

/* 
// Get the form and password input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("inputPassword");

// Add form submit event listener
form.addEventListener("submit", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the password value
  const password = passwordInput.value;

  // Create variables to track each condition
  let isLongEnough = password.length >= 8;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecial = false;

  // Check each character in the password
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    // Check for uppercase
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    // Check for lowercase
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    }
    // Check for number
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    // Check for special characters
    if (char === "@" || char === "#" || char === "$" || char === "!") {
      hasSpecial = true;
    }
  }

  // Create message for user
  let message = "";
  if (!isLongEnough) {
    message += "Password must be at least 8 characters long.\n";
  }
  if (!hasUpperCase) {
    message += "Password must contain at least one uppercase letter.\n";
  }
  if (!hasLowerCase) {
    message += "Password must contain at least one lowercase letter.\n";
  }
  if (!hasNumber) {
    message += "Password must contain at least one number.\n";
  }
  if (!hasSpecial) {
    message +=
      "Password must contain at least one special character (@, #, $, !).\n";
  }

  // If there are any errors, show them
  if (message !== "") {
    alert(message);
  } else {
    alert("Password is strong!");
    // Here you can add code to submit the form if password is valid
    // form.submit();
  }
});

*/
