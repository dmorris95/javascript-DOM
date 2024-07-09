//Task 1
function FormData(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

//Task 2
function handleSubmit(event) {
    event.preventDefault();
    //Build Object
    const newData = new FormData(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("message").value);

    console.log(newData);

    const name = document.getElementById("name").value;
    alert("Thank you " + name + "! Your form has been submitted successfully.");
    document.getElementById("testForm").reset();
}