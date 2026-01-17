let openButton = document.getElementById("chat-toggle");  
let chatBox = document.getElementById("chat-widget");     
let closeButton = document.getElementById("chat-close");  
let chatForm = document.getElementById("chat-form");      
let chatInput = document.getElementById("chat-input");    
let chatArea = document.getElementById("chat-messages");  

openButton.onclick = () => {
  chatBox.classList.add("chat-open");
  chatBox.classList.remove("chat-closed");
};

closeButton.onclick = () => {
  chatBox.classList.add("chat-closed");
  chatBox.classList.remove("chat-open");
};

chatForm.onsubmit = function(event) {
  event.preventDefault();                
  let message = chatInput.value.trim();  
  if (message === "") return;

  chatArea.innerHTML += "<div class='chat-user'>" + message + "</div>";
  let reply = getResponse(message);     
  chatArea.innerHTML += "<div class='chat-bot'>" + reply + "</div>";
  chatArea.scrollTop = chatArea.scrollHeight;    
  chatInput.value = "";                  
}


function getResponse(input) {
  const msg = input.toLowerCase();

  
  if (
    msg.includes("movie") ||
    msg.includes("music") ||
    msg.includes("game") ||
    msg.includes("celebrity") ||
    msg.includes("lifestyle")
  ) {
    return "I'm sorry, I am the CodeX Academy Assistant, I can only help with questions related to CodeX Academy, like courses, contact or about information.";
  }

  if (msg.includes("codex")) {
    return "CodeX Academy focuses on full-stack web development, backend systems, AI integration, and real-world software engineering projects.";
  }

  if (msg.includes("course")) {
    return "CodeX Academy offers intensive coding bootcamps focused on web development, backend architecture, applied AI and more.";
  }

  if (msg.includes("full stack")) {
    return "Our full-stack program covers HTML, CSS, JavaScript, Node.js, databases, APIs, and deployment.";
  }

  if (msg.includes("backend")) {
    return "Backend topics include Node.js, databases, authentication, APIs, and system design.";
  }

  if (msg.includes("ai")) {
    return "CodeX Academy teaches AI integration, automation, and how to apply machine learning in real-world applications.";
  }

  if (msg.includes("debug") || msg.includes("error")) {
    return "Debugging is a core skill taught at CodeX Academy, including testing, optimization, and troubleshooting techniques.";
  }

 if (msg.includes("contact") || msg.includes("phone")) {
    return "Contact us by E-mail or Phone. E-mail: admissions@codex.academy / Phone: (615) 669-8239";
  }

if (msg.includes("tuition") || msg.includes("cost")) {
    return "Depending on which course is chosen, tuition can cost anywhere between $17,550 to $5,850";
  }


  return "I'm sorry, I am the CodeX Academy Assistant, I can only help with questions related to CodeX Academy, like course, contact or about CodeX information. ";
}