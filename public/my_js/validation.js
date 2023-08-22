const Validate = (event) => {
    let validationErrors = 0
    //picking input fields with their names
    let firstName = document.register.fname;
    let lastName = document.register.lname;
    let email = document.register.email
    let password = document.register.password
  
  
    //picking error fields
    let fNameError = document.getElementById("fnameError");
    let lNameError = document.getElementById("lnameError");
    let emailError = document.getElementById("emailError");
    // let passwordError = document.getElementById("passwordError");
  
  
    //validating input for first name
    if (firstName.value === "") {
      fNameError.textContent = "Please enter your first name";
      fNameError.style.color = "red";
      fNameError.style.display = "block";
      validationErrors++;
    }
    //else {
    //    fNameError.innerHTML = "";
    //  fNameError.style.display = "none";
    //}
    //validating input for last name
    if (lastName.value === "") {
      lNameError.textContent = "Please enter your last name";
      lNameError.style.color = "red";
      lNameError.style.display = "block";
      validationErrors++;
    }
    //validating email error
  
    if (email.value == "") {
      email.style.border = "1px solid red";
      emailError.textContent = "Email is required";
      emailError.style = "color: red; font-size:20px; font-weight:bold; font-family:Helvetica;";
      email.focus();
      validationErrors++;
    }
  
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailRegex)) {
      email.style.border = "1px solid red";
      emailError.textContent = "Invalid Email address";
      email.focus();
      validationErrors++;
    }
    // else {
    //   email.style.border = "1px solid green";
    //   emailError.textContent = "";
    //   password.focus();
    // }
  
    // if (password.value == "") {
    //   password.style.border = "1px solid red";
    //   passwordError.textContent = "Password is required";
    //   passwordError.style = "color: red; font-size:20px; font-family:Helvetica;";
    //   password.focus();
    //   validationErrors++;
    // }

  if (validationErrors > 0) {
    event.preventDefault();
  }
  
    } 
  