function submitForm() {
            var form = document.getElementById("reviewForm");
            var formData = new FormData(form);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSdebJpo6XGQ5EhflZ90fgGwbC6xWPuSi9OweKyN3FvynDsQuQ/formResponse");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // Success message
                        showMessage("Review submitted successfully!", "green");
                    } else {
                        // Error message
                        showMessage("Review submitted successfully!", "green");
                    }
                }
            };
            xhr.send(formData);
        }

        function showMessage(message, color) {
            var messageElement = document.getElementById("message");
            messageElement.innerHTML = message;
            messageElement.style.color = color;
        }