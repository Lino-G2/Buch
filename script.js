// Script für das Buch-Projekt

// DOM-Elemente
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Klick-Event Handler
button.addEventListener('click', function() {
    handleButtonClick();
});

// Funktion zum Behandeln des Button-Klicks
function handleButtonClick() {
    const messages = [
        '👋 Hallo! Das ist eine interaktive Demo.',
        '📚 Willkommen zum Buch-Projekt!',
        '✨ JavaScript funktioniert wunderbar!',
        '🎉 Du hast den Button geklickt!',
        '💻 HTML, CSS und JavaScript arbeiten zusammen!'
    ];

    // Zufällige Nachricht auswählen
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    // Animation hinzufügen
    message.style.opacity = '0';
    message.style.transition = 'opacity 0.5s ease';

    setTimeout(function() {
        message.style.opacity = '1';
    }, 10);
}

// Optional: Page Load Event
window.addEventListener('load', function() {
    console.log('Buch-Projekt geladen!');
    console.log('Willkommen zum interaktiven Projekt.');
});

// Optional: Tastatur-Shortcut
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleButtonClick();
    }
});
