function sendMessage(message) {
    var chatBox = document.getElementById("chat-box");
    
    // Create and append a new user message
    var userMsg = document.createElement("div");
    userMsg.classList.add("user-msg");
    userMsg.innerHTML = message;
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}
