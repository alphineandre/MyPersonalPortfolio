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

// Chatbot responses with friendly messages and navigation buttons
function getBotResponse(message) {
    message = message.toLowerCase();
    
    const responses = {
        skills: {
            text: "I'd love to tell you about Alphy's amazing skills! He's proficient in HTML, CSS, JavaScript and many modern development tools. He's particularly passionate about creating responsive and user-friendly websites.",
            link: "#skills",
            linkText: "✨ Explore Skills"
        },
        contact: {
            text: "Great that you want to connect! You can reach Alphy directly via email at alphy840@gmail.com or connect on LinkedIn. He's always excited to discuss new opportunities!",
            link: "#contact",
            linkText: "📬 Let's Connect"
        },
        projects: {
            text: "Let me show you some exciting projects! Alphy has built several impressive web applications that showcase his technical expertise and creativity.",
            link: "#projects",
            linkText: "🚀 View Projects"
        },
        about: {
            text: "Let me tell you about Alphy! He's a passionate Software Developer who loves creating innovative solutions. He's always eager to learn new technologies and tackle challenging problems.",
            link: "#about",
            linkText: "👋 Meet Alphy"
        },
        education: {
            text: "Alphy has an impressive educational journey in software development! He's constantly learning and growing his skillset through both formal education and hands-on experience.",
            link: "#timeline",
            linkText: "📚 View Journey"
        }
    };

    function createMessageWithButton(response) {
        return `${response.text}<div class="chat-button-container"><button class="chat-link-btn" data-href="${response.link}">${response.linkText}</button></div>`;
    }

    if (message.includes('skills') || message.includes('what can you do') || message.includes('capable')) {
        return createMessageWithButton(responses.skills);
    }
    else if (message.includes('contact') || message.includes('reach') || message.includes('connect')) {
        return createMessageWithButton(responses.contact);
    }
    else if (message.includes('projects') || message.includes('work') || message.includes('portfolio')) {
        return createMessageWithButton(responses.projects);
    }
    else if (message.includes('about') || message.includes('who') || message.includes('background')) {
        return createMessageWithButton(responses.about);
    }
    else if (message.includes('education') || message.includes('study') || message.includes('qualification')) {
        return createMessageWithButton(responses.education);
    }
    else {
        return "Hey there! 👋 I'd be happy to tell you about Alphy's skills, projects, education, or how to get in contact. What interests you the most?";
    }
}

// Enhanced message display with animations
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender.toLowerCase()}-message`);
    messageElement.innerHTML = `<span class="sender">${sender}</span> ${message}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;

    const buttons = messageElement.querySelectorAll('.chat-link-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.dataset.href;
        });
    });
}

// Handle send button click
sendBtn.addEventListener('click', function() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'You');
        userInput.value = ''; // Clear input
        
        // Get bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage(botResponse, 'Kit');
        }, 1000);
    }
});



