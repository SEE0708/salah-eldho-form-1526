// DECLARING VARIABLES 
const form = document.getElementById('form');

const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgTextarea = document.getElementById("msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Start with your function here
function validateForm(event){
    
    event.preventDefault();

    const formData = {};
    const errors = [];

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const msgValue = msgTextarea.value.trim();

    //FULL NAME
    if (nameValue !== "") {
        formData.name = nameValue;
    } else {
        errors.push("Name is required.");
    }

    //EMAIL
    if (emailValue !== "") {
        if (emailRegex.test(emailValue)) {
          formData.email = emailValue;
        } else {
          errors.push("Invalid email address.");
        }
      }
      //MESSAGE
      if (msgValue !== "") {
        formData.msg = msgValue;
      } else {
        errors.push("Message is required.");
      }

      //FEEDBACK/ERRORS
      if (errors.length > 0) {
        console.error("Form submission failed:", errors);
      } else {
        console.log("Form submitted successfully:", formData);
        nameInput.value = "";
        emailInput.value = "";
        msgTextarea.value = "";
      
    
  };
  
}
// Register your form to "click" event.
submitButton.addEventListener('click', validateForm);
