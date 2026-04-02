
const emailInput = document.querySelector('#email');
const isValidEmail = (email)=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const validEmail = ()=>{

const email = emailInput.value.trim()
const errorM = document.querySelector('#errorM')

 if(email === ''){

alert("Enter your email address")

return false
 } 

 if(!isValidEmail( email)){
errorM.innerHTML = "Valid email is required"
emailInput.style.border = "1px solid red"
errorM.style.color = "red"
return false

 }

    errorM.innerHTML = ""
    emailInput.style.background = ''
    emailInput.style.border = ''
    
        console.log(`Thank you for submitting your email: ${email}`)
       
return true

  
 }
//  DOMContentLoaded event listener to ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#form');
// handles email submission and redirects to the thank you page if the email is valid
form.addEventListener('submit', (e) => {
    e.preventDefault();

   
    if(validEmail()){
        localStorage.setItem("userEmail", emailInput.value.trim())
window.location.href = 'thanks.html'
    }

})

// validates the email as the user types
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        validEmail();
    }
});

})





 





