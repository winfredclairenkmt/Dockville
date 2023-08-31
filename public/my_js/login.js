const Validate = (event) => {
    let error = 0;

    // let email = document.querySelector('input[type="email"]'); // Select input by type
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let password = document.querySelector('input[type="password"]'); // Select input by type
    let passwordError = document.getElementById("passwordError");

    if (email.value === "" || !email.value.match(emailRegex)) {
        email.style.border = "1px solid red";
        emailError.textContent = "Email required";
        emailError.style.color = "red";
        emailError.style.fontSize = "9px";
        emailError.style.fontFamily = "Helvetica";
        email.focus();
        error++;
        return false;
        
    } 
    //  else if (!email.value.match(emailRegex)) {
    //     email.style.border = "1px solid red";
    //     emailError.textContent = "Invalid Email address";
    //     email.focus();
    //     error++;
    //     return false;
    // }
    else {
        email.style.border = "1px solid green";
        password.focus();
    }


   

     if (password.value === "") {
        password.style.border = "1px solid red";
        passwordError.textContent = "Password is required";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "11px";
        passwordError.style.fontFamily = "Helvetica";
        password.focus();
        error++;
        return false;
    }
       else {
        email.style.border = "1px solid green";
        password.focus();
    }
 console.log(error);
 
    if (error > 0) {
        event.preventDefault();
    }
};