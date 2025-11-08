// Dummy credentials for debugging
const validUsername = "admin";
const validPassword = "12345";
debuggerss
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Debug Info:");
  console.log("Username Entered:", username);
  console.log("Password Entered:", password);

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    errorMessage.style.color = "green";
    errorMessage.textContent = "✅ Login successful!";
    console.log("Login Successful!");
    // Redirect or perform further logic
    setTimeout(() => {  
      window.location.href = "dashboard.html"; // Example redirect
    }, 1500);
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "❌ Invalid username or password!";
    console.log("Login Failed: Invalid credentials");
  }
});
 