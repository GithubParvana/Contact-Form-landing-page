let contactForm = document.getElementsByName("contactForm");




contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email");
    let message = document.getElementById("message");
    
    if (email.value == "" || message.value == "") 
    {
        // throw error
        alert("Ensure you input a value in both fields!")
    
    }

    else {
        // operation with form
        alert("This form has been successfully submitted!");
        console.log(
            `This form has a email of ${email.value} and message of ${message.value}`
        );

        email.value = "";
        message.value = "";
    }
});



