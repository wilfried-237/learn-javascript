let myLeads = ["www.google.com","www.youtube.com","www.udemy.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)

    
})


// Log out the items in the myLeads array using a for loop 

for(i = 0;i < myLeads.length; i++){
    console.log(myLeads[i])
}

