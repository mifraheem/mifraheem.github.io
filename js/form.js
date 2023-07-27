

let button = document.getElementById('sendBtn');
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!document.getElementById('myForm').checkValidity()) {
        // If the form is not valid, do not proceed with email submission
        return;
    }
    const originalButtonText = button.value;
    button.value = "Sending message...";

    emailjs.send("service_t9d0kmj", "template_v4zkfek", {
        name: document.getElementById('name').value,
        subject: document.getElementById("subject").value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value,
    }
    )
       .then(res => {
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('message').value = ""
            document.getElementById('subject').value = ""
            document.getElementById('phone').value = ""
            alert("Your message sent successfully.")
            button.value = originalButtonText;
            
        })
        .catch((err) => {
            alert("Error in sendin message please try again!")
            button.value = originalButtonText;
        })
})
