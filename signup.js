document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.querySelector('.password-strength');
    const termsCheckbox = document.getElementById('terms');

    // Password strength indicator
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        updateStrengthIndicator(strength);
    });

    // Form submission handler
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if(validateForm()) {
            showLoader();
            // Simulate API call
            setTimeout(() => {
                hideLoader();
                showSuccessAlert();
                signupForm.reset();
                passwordStrength.textContent = 'Minimum 8 characters with numbers and symbols';
                passwordStrength.style.color = '#a0a0a0';
            }, 2000);
        }
    });

    // Mobile menu toggle (for smaller screens)
    function handleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        if(window.innerWidth <= 768) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    }

    // Password strength calculation
    function calculatePasswordStrength(password) {
        let strength = 0;
        if(password.length >= 8) strength++;
        if(/[A-Z]/.test(password)) strength++;
        if(/[0-9]/.test(password)) strength++;
        if(/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    }

    // Update password strength display
    function updateStrengthIndicator(strength) {
        const messages = [
            'Very Weak',
            'Weak',
            'Moderate',
            'Strong',
            'Very Strong'
        ];
        const colors = [
            '#ff0000',
            '#ff6a00',
            '#ffd000',
            '#a0ff00',
            '#00ff00'
        ];
        
        passwordStrength.textContent = `Password Strength: ${messages[strength]}`;
        passwordStrength.style.color = colors[strength];
    }

    // Form validation
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value.trim();

        if(!name) {
            showAlert('Please enter your full name');
            return false;
        }

        if(!validateEmail(email)) {
            showAlert('Please enter a valid email address');
            return false;
        }

        if(calculatePasswordStrength(password) < 3) {
            showAlert('Password must be at least 8 characters with a mix of numbers and symbols');
            return false;
        }

        if(!termsCheckbox.checked) {
            showAlert('You must agree to the terms and conditions');
            return false;
        }

        return true;
    }

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Alert system
    function showAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        alertBox.textContent = message;
        
        document.body.appendChild(alertBox);
        
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }

    // Loader functions
    function showLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        document.body.appendChild(loader);
    }

    function hideLoader() {
        const loader = document.querySelector('.loader');
        if(loader) loader.remove();
    }

    // Success alert
    function showSuccessAlert() {
        const successAlert = document.createElement('div');
        successAlert.className = 'success-alert';
        successAlert.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Account created successfully!
        `;
        document.body.appendChild(successAlert);
        
        setTimeout(() => {
            successAlert.remove();
        }, 3000);
    }

    // Responsive adjustments
    window.addEventListener('resize', handleMobileMenu);
});