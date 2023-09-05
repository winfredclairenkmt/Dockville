const Validate = (event) => {
  let error = 0;
  console.log('errors', error)

  let drivername = document.getElementById("drivername");
  let gender = document.getElementById("gender");
  let telephone = document.getElementById("telephone");
  let numberplate = document.getElementById("numberplate");
  let cartype = document.getElementById("cartype");
  let nin = document.getElementById("nin");
  let carmodel = document.getElementById("carmodel");
  let colour = document.getElementById("colour");
  let date = document.getElementById("date");
  let timein = document.getElementById("timein");
  let parkingtype = document.getElementById("parkingtype");
  let charge = document.getElementById("charge");
  let receipt = document.getElementById("receipt");

  //picking error fields
  let driverNameError = document.getElementById("driverNameError");
  let genderError = document.getElementById("genderError");
  let telephoneError = document.getElementById("telephoneError");
  let numberplateError = document.getElementById("numberplateError");
  let cartypeError = document.getElementById("cartypeError");
  let ninError = document.getElementById("ninError");
  let carmodelError = document.getElementById("carmodelError");
  let colourError = document.getElementById("colourError");
  let dateError = document.getElementById("dateError");
  let timeinError = document.getElementById("timeinError");
  let parkingtypeError = document.getElementById("parkingtypeError");
  let chargeError = document.getElementById("chargeError");
  let receiptError = document.getElementById("receiptError");

  //validating input for name
  if (drivername.value == "" || drivername.value.length < 3) {
    drivername.style.border = " 1px solid red";
    driverNameError.textContent = "Driver name required";
    driverNameError.style =
      "color: red; font-size:9px;  font-family:Helvetica;";
    drivername.focus();
    error++;
    return false;
  } else {
    drivername.style.border = "1px solid green";
    driverNameError.textContent = "";
    gender.focus();
  }
  const generatedReceiptNumber = generateReceiptNumber();
  console.log('generatedReceiptNumber', generatedReceiptNumber)
  receipt.value = generatedReceiptNumber;

  //validating input for gender
  if (gender.value == "") {
    gender.style.border = " 1px solid red";
    genderError.textContent = "gender required";
    genderError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    gender.focus();
    error++;
    return false;
  } else {
    gender.style.border = "1px solid green";
    genderError.textContent = "";
    telephone.focus();
  }

  //validating input for telephone
  const telephoneRegex = /^(\+256|7)[\d]{9}$/;
  if (telephone.value == "" || !telephone.value.match(telephoneRegex)) {
    telephone.style.border = "1px solid red";
    telephoneError.textContent = "Telephone must look like +256/7..";
    telephoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    telephone.focus();
    error++;
    return false;
  } else {
    telephone.style.border = "1px solid green";
    telephoneError.textContent = "";
    numberplate.focus();
  }
  //validating input for numberplate
  const numberplateRegex = /^[A-Z]{3}\d{3}[A-Z]$/;

  if (numberplate.value === "" || !numberplate.value.match(numberplateRegex)) {
    numberplate.style.border = " 1px solid red";
    numberplateError.textContent = "Valid numberplate required";
    numberplateError.style =
      "color: red; font-size:9px;  font-family:Helvetica;";
    numberplate.focus();
    error++;
    return false;
  } else {
    numberplate.style.border = "1px solid green";
    numberplateError.textContent = "";
    cartype.focus();
  }

  //validating input for cartype
  if (cartype.value === "") {
    cartype.style.border = " 1px solid red";
    cartypeError.textContent = "cartype required";
    cartypeError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    cartype.focus();
    error++;
    return false;
  } else {
    cartype.style.border = "1px solid green";
    nin.focus();
  }

  //validating input for nin
  // const ninRegex = /^(CF [a-zA-Z0-9]{12})+$/
  // const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/
  if (nin.value === "") {
    nin.style.border = " 1px solid red";
    ninError.textContent = "nin required";
    ninError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    nin.focus();
    error++;
    return false;
  } else {
    ninError.style.border = "1px solid green";
    ninError.textContent = "";
    carmodel.focus();
  }

  //validating input for carmodel
  if (carmodel.value === "") {
    carmodel.style.border = " 1px solid red";
    carmodelError.textContent = "carmodel required";
    carmodelError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    carmodel.focus();
    error++;
    return false;
  } else {
    carmodelError.style.border = "1px solid green";
    carmodelError.textContent = "";
    colour.focus();
  }

  //validating input for color
  if (colour.value === "") {
    colour.style.border = " 1px solid red";
    colourError.textContent = "colour required";
    colourError.style = "colour: red; font-size:9px;  font-family:Helvetica;";
    colour.focus();
    error++;
    return false;
  } else {
    colour.style.border = "1px solid green";
    colourError.textContent = "";
    date.focus();
  }

  //validating input for date
  if (date.value === "") {
    date.style.border = " 1px solid red";
    dateError.textContent = "date required";
    dateError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    date.focus();
    error++;
    return false;
  } else {
    dateError.style.border = "1px solid green";
    dateError.textContent = "";
    timein.focus();
  }

  //validating input for timein
  if (timein.value === "") {
    timein.style.border = " 1px solid red";
    timeinError.textContent = "timein required";
    timeinError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    timein.focus();
    error++;
    return false;
  } else {
    timeinError.style.border = "1px solid green";
    timeinError.textContent = "";
    charge.focus();
  }

  //validating input for parkingtype
  if (parkingtype.value === "") {
    parkingtype.style.border = " 1px solid red";
    parkingtypeError.textContent = "parkingtype required";
    parkingtypeError.style =
      "color: red; font-size:9px;  font-family:Helvetica;";
    parkingtype.focus();
    error++;
    return false;
  } else {
    parkingtypeError.style.border = "1px solid green";
    parkingtypeError.textContent = "";
    charge.focus();
  }

  //validating input for charge
  if (charge.value === "") {
    charge.style.border = " 1px solid red";
    chargeError.textContent = "charge required";
    chargeError.style = "color: red; font-size:9px;  font-family:Helvetica;";
    charge.focus();
    error++;
    return false;
  } else {
    chargeError.style.border = "1px solid green";
    chargeError.textContent = "";
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
    receiptError.textContent = "";
  }
  generateReceiptNumber();



  // Generate a unique receipt number if all details are valid
  
    // const receipt = document.getElementById("receipt");


  if (error > 0) {
    event.preventDefault();
  }
};

// Generate a unique receipt number based on current date and time
function generateReceiptNumber() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const randomDigits = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");

    console.log(`${year}${month}${day}${hours}${minutes}${seconds}${randomDigits}`);
  return `${year}${month}${day}${hours}${minutes}${seconds}${randomDigits}`;
}

