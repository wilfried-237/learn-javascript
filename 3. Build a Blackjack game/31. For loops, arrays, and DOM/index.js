let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph 
//using a for loop and .textContent
let length = sentence.length
for(i=0;i<length;i++){
    greetingEl.textContent += sentence[i] + " "
}

