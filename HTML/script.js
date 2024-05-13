const form = document.getElementById('contact-form');
// const axios = window.axios; 
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const subject = document.getElementById('subject').value;
  const mailbody = document.getElementById('message').value;

  console.log("LOL")

  // Send data using Axios (replace with your email API logic)
  try {
    const response = await fetch("http://localhost:5000/api/users/email", {
        method: 'POST', // Specify POST method
        headers: { 'Content-Type': 'application/json' }, // Set content type (optional)
        body: JSON.stringify({name,
            email,
            mobile,
            subject,
            mailbody}), // Convert data to JSON string (optional)
      });
    
    console.log(response.data); // Assuming your API returns a response
    alert('Message sent successfully!');
  } catch (error) {
    console.error(error);
    alert('Error sending message. Please try again.');
  }

  // Clear form after successful submission (optional)
  form.reset();
});
