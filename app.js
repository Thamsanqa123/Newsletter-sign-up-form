const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('button')

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
    emailInput.style.border = ""
    
        console.log(`Thank you for submitting your email: ${email}`)

return true

  
 }


form.addEventListener('click', (e) => {
    e.preventDefault();

   
    validEmail()
    window.location.href = ''
})





