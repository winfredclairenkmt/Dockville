const Validate = (event) => {
    let error = 0;
  
    //picking input fields with their names
    let driverName = document.register.drivername;
    let telephone = document.register.telephone;
    let numberplate = document.register.numberplate;
    let nin = document.register.nin;
    let carmodel = document.register.carmodel;
    let color = document.register.color;
    let charge = document.register.charge;
    let receipt = document.register.receipt;
    
  
    //picking error fields
    let driverNameError = document.getElementById("driverNameError");
    let telephoneError = document.getElementById("telephoneError");
    let numberplateError = document.getElementById("numberplateError");
    let ninError = document.getElementById("ninError");
    let carmodelError = document.getElementById("carmodelError");
    let colorError = document.getElementById("colorError");
    let chargeError = document.getElementById("chargeError");
    let receiptError = document.getElementById("receiptError");
    
    
    //validating input for first name
    if (driverName.value === "") {
      driverName.style.border = " 1px solid red";
      driverNameError.textContent = "name required";
      driverNameError.style =
        "color: red; font-size:9px;  font-family:Helvetica;";
      driverName.focus();
      error++;
    } else {
      driverNameError.style.border = "1px solid green";
      telephone.focus();
    }
  
    //validating input for telephone
    if (telephone.value === "") {
      telephone.style.border = " 1px solid red";
      telephoneError.textContent = "telephone required";
      telephoneError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      telephone.focus();
      error++;
    } else {
      telephoneError.style.border = "1px solid green";
      numberplate.focus();
    }
  
    //validating input for numberplate
    if (numberplate.value === "") {
      numberplate.style.border = " 1px solid red";
      numberplateError.textContent = "numberplate required";
      numberplateError.style =
        "color: red; font-size:9px;  font-family:Helvetica;";
      numberplate.focus();
      error++;
    } else {
      numberplateError.style.border = "1px solid green";
      nin.focus();
    }
  
    //validating input for nin
    if (nin.value === "") {
      nin.style.border = " 1px solid red";
      ninError.textContent = "nin required";
      ninError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      nin.focus();
      error++;
    } else {
      ninError.style.border = "1px solid green";
      carmodel.focus();
    }
  
    //validating input for carmodel
    if (carmodel.value === "") {
      carmodel.style.border = " 1px solid red";
      carmodelError.textContent = "carmodel required";
      carmodelError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      carmodel.focus();
      error++;
    } else {
      carmodelError.style.border = "1px solid green";
      color.focus();
    }
  
    //validating input for color
    if (color.value === "") {
      color.style.border = " 1px solid red";
      colorError.textContent = "color required";
      colorError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      color.focus();
      error++;
    } else {
      colorError.style.border = "1px solid green";
      charge.focus();
    }
  
    //validating input for charge
    if (charge.value === "") {
      charge.style.border = " 1px solid red";
      chargeError.textContent = "charge required";
      chargeError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      charge.focus();
      error++;
    } else {
      chargeError.style.border = "1px solid green";
      receipt.focus();
    }
  
    //validating input for receipt
    if (receipt.value === "") {
      receipt.style.border = " 1px solid red";
      receiptError.textContent = "receipt required";
      receiptError.style = "color: red; font-size:9px;  font-family:Helvetica;";
      receipt.focus();
      error++;
    } else {
      receiptError.style.border = "1px solid green";
    }
  
    if (error > 0) {
      event.preventDefault();
    }
  };
  