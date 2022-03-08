const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting,name,mood) {
    welcomeEl.textContent = `
    ${greeting}, ${name}, ${mood}
    `   
}

greetUser("Welcome back","Per Harald Borgen 👋","how are you doing today") 