function validateForm(event) {
    event.preventDefault(); 

    let valid = true;


    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.style.display = 'none';
    });


    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    }

    
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    }


    const password = document.getElementById('password').value;
    if (!password || password.length < 6) {
        document.getElementById('password-error').style.display = 'block';
        valid = false;
    }

    
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}

document.getElementById('signup-form').addEventListener('submit', validateForm);



document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    
    window.location.href = 'home.html';
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert('Please fill in both fields.');
        return;
    }

   
    window.location.href = "Home.html"; 
});
