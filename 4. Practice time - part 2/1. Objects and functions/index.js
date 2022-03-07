// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

let person = {name: "Wilfried", age: 20, country: "cameroon"}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData(){
    document.write(person.name +" is "+ person.age + " years old and lives in " + person.country)
}

// Call the logData() function to verify that it works

logData()