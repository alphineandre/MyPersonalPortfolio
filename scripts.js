// Get elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatContent = document.getElementById('chat-content');

// Show chatbot when button is clicked
chatbotBtn.addEventListener('click', function() {
    chatbotWindow.style.display = 'flex';  
    chatbotBtn.style.display = 'none';     // Hide the button after the chatbot window opens
});


// Hide chatbot when close button is clicked
closeBtn.addEventListener('click', function() {
    chatbotWindow.style.display = 'none';
    chatbotBtn.style.display = 'block';
});

// Function to append messages to chat
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = `${sender}: ${message}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight; // Auto scroll to bottom
}

// Handle send button click
sendBtn.addEventListener('click', function() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'You');
        userInput.value = ''; // Clear input
        
        // Simulate bot response
        setTimeout(() => {
            appendMessage('Hello! How can I help you?', 'Bot');
        }, 1000);
    }
});
