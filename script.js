const form = document.getElementById('myForm');
form.addEventListener('submit', submitBtn);

function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email)
}

function submitBtn(event) {
   event.preventDefault();

    let emailInput = document.getElementById('myEmail');
    let textErr = document.getElementById('textError');
    let successMessage = document.getElementById('successMessage');
    let signUp = document.getElementById('signUp');

    let email = emailInput.value.trim();
    
    if(validateEmail(email)) {
        
        successMessage.classList.remove('hidden');
        signUp.classList.add('hidden', 'lg:hidden');
        
    } else {
        textErr.innerHTML = 'Valid email required';
        emailInput.classList.add('border-tomatto', `focus:outline-tomatto`)
        emailInput.classList.add('bg-tomatto/20')
        
    }
}

