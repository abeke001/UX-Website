// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle purchase button clicks
document.querySelectorAll('.purchase-btn').forEach(button => {
    button.addEventListener('click', function () {
        const plate = this.previousElementSibling.previousElementSibling.textContent;
        alert(`You have selected ${plate}. Proceed to payment.`);
    });
});

console.log("Welcome to FAS Plates!");
