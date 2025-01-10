// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Handle purchase button clicks with visual feedback
document.querySelectorAll('.purchase-btn').forEach(button => {
    button.addEventListener('click', function () {
        const plate = this.previousElementSibling.previousElementSibling.textContent;
        showAlert(`You have selected ${plate}. Proceed to payment.`);
    });
});

// Function to show a custom alert with animation
function showAlert(message) {
    // Create alert element
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.textContent = message;
    
    // Add to body
    document.body.appendChild(alertBox);
    
    // Show alert with fade-in effect
    setTimeout(() => {
        alertBox.classList.add('show');
    }, 10);
    
    // Remove alert after a few seconds with fade-out effect
    setTimeout(() => {
        alertBox.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 500); // Match this duration with CSS transition duration
    }, 3000);
}


console.log("Welcome to FAS Plates!");
