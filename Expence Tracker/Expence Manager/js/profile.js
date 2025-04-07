function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginPrompt = document.getElementById("login-prompt");
  const profileInfo = document.getElementById("profile-info");

  if (isLoggedIn === "true") {
    profileInfo.style.display = "block";
    loginPrompt.style.display = "none";
    document.getElementById("user-email").textContent = localStorage.getItem("userEmail");
  } else {
    loginPrompt.style.display = "block";
    profileInfo.style.display = "none";
  }
}
function changePassword() {
  alert("Password updated successfully!");
}
document.addEventListener("DOMContentLoaded", checkLoginStatus);



  