document.getElementByName("form").addEventListener("submit", validateName);
console.log("Hello");

function validateName() {
    let name, error;
  
    // Get the value of the input field with name = "your-name"
    name = document.getElementByName("your-name").value;
  
    console.log(name)
    
    //document.getElementById("demo").innerHTML = text;
}