
const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header"),
  loginForm = document.querySelector(".login form"),
  signupForm = document.querySelector(".signup form");

// Dummy user for testing login
const dummyUser = {
  fullName: "Dev",
  email: "dev@example.com",
  password: "password123",
};
localStorage.setItem("user_dev@example.com", JSON.stringify(dummyUser));

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
  console.log("Switched to Login form");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
  console.log("Switched to Signup form");
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Signup form submitted");

  const fullName = signupForm.querySelector("input[placeholder='Full name']").value;
  const email = signupForm.querySelector("input[placeholder='Email address']").value;
  const password = signupForm.querySelector("input[placeholder='Password']").value;
  const termsAccepted = signupForm.querySelector("#signupCheck").checked;

  if (!termsAccepted) {
    alert("You must accept the terms and conditions to sign up.");
    return;
  }

  const userData = { fullName, email, password };
  localStorage.setItem("user_" + email, JSON.stringify(userData));
  alert("Signup successful! You can now log in.");

  wrapper.classList.add("active");
  signupForm.reset();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login form submitted");

  const email = loginForm.querySelector("input[placeholder='Email address']").value;
  const password = loginForm.querySelector("input[placeholder='Password']").value;

  const storedUserData = localStorage.getItem("user_" + email);

  if (storedUserData) {
    const user = JSON.parse(storedUserData);

    if (user.password === password) {
      alert("Login successful!");
      console.log("Logged in successfully:", user.fullName);

      // Set login status in localStorage
      localStorage.setItem('loggedIn', 'true');

      // Redirect to home.html (adjust path if necessary)
      window.location.href = "../home.html"; // Correct relative path based on folder structure
    } else {
      alert("Incorrect password. Please try again.");
      console.log("Incorrect password for user:", email);
    }
  } else {
    alert("No account found with this email. Please sign up.");
    console.log("No user found with email:", email);
  }

  loginForm.reset();
});


