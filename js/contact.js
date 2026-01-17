let url = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/contact_messages";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI";

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

async function submitContactForm(event) {
event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;


let contactData = {
  name : name ,
  email : email ,
  subject : subject ,
  message : message
};

let response = await fetch(url , {
  method: "POST",
  headers: {
    "apikey" : apikey,
    "Authorization":`Bearer ${apikey}`,
    "Content-Type" : "application/json"
   
  },

  body : JSON.stringify(contactData)
});

if (response.ok) {
    status.textContent = "Message sent!";
    status.classList.add("text-success");
    form.reset();
} else {
    status.textContent = "Message not sent. Please try again.";
    status.classList.add("text-danger");
}
}

form.addEventListener("submit", submitContactForm);