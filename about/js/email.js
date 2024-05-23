    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.querySelector('input[name="entry.618758903"]').value;
        var url = 'https://docs.google.com/forms/d/e/1FAIpQLScxxOQjqWZ1frzXebh7dB9hq7exb4QF9LqKW7iSkLf3537B5g/formResponse';
        var params = new URLSearchParams();
        params.append('entry.618758903', email);

        fetch(url, {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            if (response.ok || response.type === 'opaque') {
                document.getElementById('formResponse').innerText = 'Subscription successful!';
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            document.getElementById('formResponse').innerText = 'Subscription successful!';
            console.error('There was a problem with the fetch operation:', error);
        });
    });