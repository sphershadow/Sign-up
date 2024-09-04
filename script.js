document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next-icon-button');

    nextButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        window.location.href = 'create.html'; // Redirect to another HTML file
    });

        const verifyButton = document.getElementById('verify-button');
    
        verifyButton.addEventListener('click', function() {
            window.location.href = 'verify.html'; // Redirect to verify.html
        });
    
});