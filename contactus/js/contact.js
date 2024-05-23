  document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        const formData = new FormData(form);

        // Create an XMLHttpRequest to submit the form
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Clear the form fields
                    form.reset();

                    // Display a success message
                    const messageDiv = form.querySelector('.form-messege');
                    messageDiv.textContent = 'Message sent successfully!';
                    messageDiv.style.display = 'block';
                    messageDiv.style.color = 'green'; // Ensure the success message is green
                } else {
                    // Display an error message
                    const messageDiv = form.querySelector('.form-messege');
                    messageDiv.textContent = 'Message sent successfully!';
                    messageDiv.style.display = 'block';
                    messageDiv.style.color = 'red'; // Ensure the error message is red
                }
            }
        };

        xhr.send(formData);
    });