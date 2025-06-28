document.addEventListener('DOMContentLoaded', function() {
  window.AIChatWidget.init({
    widgetId: "68544ba72dcde8a8655b81d4"
  });

  function addNote() {
    const chatWidget = document.querySelector('.ai-chat-widget');
    if (chatWidget) {
      // Check if a note already exists by looking for a div with the custom class
      const existingNote = chatWidget.querySelector('.custom-note');
      if (!existingNote) {
        const note = document.createElement('div');
        note.className = 'custom-note'; // Add a unique class to identify the note
        note.innerHTML = 'Powered by <a href="https://rebornleads.ai" target="_blank">rebornleads.ai</a>';
        note.style.color = '#d4d4d4';
        note.style.fontSize = '12px';
        note.style.textAlign = 'center';
        note.style.position = 'absolute';
        note.style.bottom = '0';
        note.style.left = '0';
        note.style.right = '0';
        chatWidget.appendChild(note);
      }
    }
  }

  // Delay and then check for the button
  setTimeout(() => {
    let buttonAttempts = 0;
    const maxButtonAttempts = 180; // Try for about X seconds (X * 100ms)
    const buttonInterval = setInterval(() => {
      const chatButton = document.querySelector('.minimized-button');
      if (chatButton) {
        chatButton.addEventListener('click', function() {
          setTimeout(addNote, 500); // Delay to allow widget to render
        });
        clearInterval(buttonInterval); // Stop checking once button is found
      } else if (buttonAttempts >= maxButtonAttempts) {
        clearInterval(buttonInterval); // Stop after max attempts
      }
      buttonAttempts++;
    }, 100); // Check every 100ms
  }, 3000); // Initial 3-second delay
});
