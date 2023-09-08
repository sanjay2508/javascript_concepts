function submitForm(event) {
    event.preventDefault();
    console.log(event.target);

    const name = document.getElementById('name').value;
    console.log(name);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Form submitted successfully');
        }
    };
    xhr.send(formData);

    fetch('/submit', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.log('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

}