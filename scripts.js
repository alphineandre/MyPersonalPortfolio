// Add this at the beginning of your scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const expandedContent = document.querySelector('.expanded-content');
    
    if(readMoreBtn && expandedContent) {
        readMoreBtn.addEventListener('click', function() {
            expandedContent.classList.toggle('show');
            readMoreBtn.textContent = expandedContent.classList.contains('show') ? 'Read Less' : 'Read More';
        });
    }
});

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

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove flipped class from all other items
        timelineItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('flipped');
            }
        });
        // Toggle flipped class on clicked item
        item.classList.toggle('flipped');
    });
});

// Clear floats after timeline container
const timelineContainer = document.querySelector('.timeline-container');
timelineContainer.style.overflow = 'hidden';

const revealOnScroll = () => {
    timelineItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;
        
        if(top < triggerBottom) {
            item.classList.add('show');
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    timelineItems.forEach((item) => {
        observer.observe(item);
    });
});


document.querySelector('.read-more-btn').addEventListener('click', function() {
    const expandedContent = document.querySelector('.expanded-content');
    const btn = this;
    
    expandedContent.classList.toggle('show');
    btn.textContent = expandedContent.classList.contains('show') ? 'Read Less' : 'Read More';
});
