document.getElementById('customerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    event.preventDefault(); // Prevent form submission

    // Clear previous error messages and borders
    document.querySelectorAll('.error-message').forEach(span => {
        span.style.display = 'none';
    });
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-red-500');
    });

    // Validate the form
    let isValid = true;
    const company = document.getElementById('company');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone1 = document.getElementById('phone1');
    const phone2 = document.getElementById('phone2');
    const isPaymentMethodChecked = document.getElementById('togglePaymentMethod').checked;

    // Validate company (required)
    if (company.value.trim() === '') {
        console.log("company classlist", company.classList)
        document.getElementById('companyError').style.display = 'block';
        document.getElementById('companyError').textContent = 'Company name is required.';
        company.classList.add('border-red-500');
        isValid = false;
    }

    // Validate first name (required and min 2 chars)
    if (firstName.value.trim().length < 2) {
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstNameError').textContent = 'First Name is required.';
        firstName.classList.add('border-red-500');
        isValid = false;
    }

    // Validate last name (required)
    if (lastName.value.trim() === '') {
        document.getElementById('lastNameError').style.display = 'block';
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
        lastName.classList.add('border-red-500');
        isValid = false;
    }

    // Validate email (must be valid)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        email.classList.add('border-red-500');
        isValid = false;
    }

    // Validate Phone 1 (required and must be numeric)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone1.value)) {
        document.getElementById('phone1Error').style.display = 'block';
        document.getElementById('phone1Error').textContent = 'Invalid Phone Number.';
        phone1.classList.add('border-red-500');
        isValid = false;
    }

    // Validate Phone 2 (optional but required if filled)
    if (phone2.value.trim() === "") {
        document.getElementById('phone2Error').style.display = 'block';
        document.getElementById('phone2Error').textContent = 'Invalid Phone Number.';
        phone2.classList.add('border-red-500');
        isValid = false;
    }

    // Payment Method validation (optional if checkbox is checked)
    if (isPaymentMethodChecked) {
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethod) {
            document.getElementById('paymentDetailsError').style.display = 'block';
            document.getElementById('paymentDetailsError').textContent = 'Please select a payment method.';
            isValid = false;
        }
    }

    // If the form is valid, process the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Submit the form using AJAX or proceed with the actual form submission
    }
});

document.getElementById('togglePaymentMethod').addEventListener('change', function () {
    const paymentOptions = document.getElementById('paymentOptions');
    if (this.checked) {
        paymentOptions.classList.remove('hidden');
    } else {
        paymentOptions.classList.add('hidden');
    }
});