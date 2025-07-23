document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Handle click on menu icon
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Handle click on each navbar item to close navigation
    navbar.querySelectorAll('a').forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });

    // Validate form when Submit button is pressed
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Check form validity
        if (validateForm()) {
            // Form is valid, get values from input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsChecked = document.getElementById('terms').checked;

            // Log values or submit form data to server
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone Number:', phoneNumber);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            console.log('Terms agreed:', termsChecked);
            
            // Reset form
            document.getElementById('reserve-form').reset();
        }
    });

    // Function to validate form
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsChecked = document.getElementById('terms').checked;
        let isValid = true;

        // Validate name
        if (name === '') {
            isValid = false;
            document.getElementById('usernameError').textContent = 'Name is required';
        } else {
            document.getElementById('usernameError').textContent = '';
        }

        // Validate email
        if (email === '') {
            isValid = false;
            document.getElementById('emailError').textContent = 'Email is required';
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Validate phone number
        if (phoneNumber === '') {
            isValid = false;
            document.getElementById('phoneNumberError').textContent = 'Phone number is required';
        } else {
            document.getElementById('phoneNumberError').textContent = '';
        }

        // Validate password
        if (password === '') {
            isValid = false;
            document.getElementById('passwordError').textContent = 'Password is required';
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        // Validate confirm password
        if (confirmPassword === '') {
            isValid = false;
            document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            isValid = false;
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        } else {
            document.getElementById('confirmPasswordError').textContent = '';
        }

        // Validate terms agreement
        if (!termsChecked) {
            isValid = false;
            document.getElementById('termsError').textContent = 'You must agree to the terms and services';
        } else {
            document.getElementById('termsError').textContent = '';
        }

        return isValid;
    }
});

