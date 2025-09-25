// This function runs when the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {

    // A reusable function to handle form submissions
    const handleFormSubmit = (formId, successMessage) => {
        const form = document.getElementById(formId);
        // If the form exists on the current page, add the event listener
        if (form) {
            form.addEventListener('submit', (event) => {
                // 1. Prevent the default browser action (page reload)
                event.preventDefault();

                const messageDiv = document.getElementById('form-message');
                const submitButton = form.querySelector('button[type="submit"]');

                // 2. Show a loading state
                messageDiv.textContent = 'جارِ المعالجة...';
                messageDiv.className = 'form-message form-message-loading';
                submitButton.disabled = true;

                // 3. Simulate a network delay (e.g., 1.5 seconds)
                setTimeout(() => {
                    // 4. Show the success message
                    messageDiv.textContent = successMessage;
                    messageDiv.className = 'form-message form-message-success';
                    submitButton.disabled = false;
                    form.reset(); // Clear the form fields

                    // Optional: Hide the message after a few seconds
                    setTimeout(() => {
                        messageDiv.textContent = '';
                        messageDiv.className = 'form-message';
                    }, 4000); // Hide after 4 seconds

                }, 1500);
            });
        }
    };

    // Attach the handler to each form with a custom success message
    handleFormSubmit('login-form', 'تم تسجيل الدخول بنجاح! جارِ التوجيه...');
    handleFormSubmit('signup-form', 'تم إنشاء حسابك بنجاح! يمكنك الآن تسجيل الدخول.');
    handleFormSubmit('recovery-form', 'تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.');
    handleFormSubmit('contact-form', 'شكرًا لك! تم استلام رسالتك بنجاح.');

});