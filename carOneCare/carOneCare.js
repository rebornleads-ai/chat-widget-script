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
        console.log("Note added to chat widget");
      } else {
        console.log("Note already exists, skipping addition");
      }
    } else {
      console.log("Chat widget not found");
    }
  }

  // Delay and then check for the button
  setTimeout(() => {
    let buttonAttempts = 0;
    const maxButtonAttempts = 40; // Try for about 4 seconds (40 * 100ms)
    const buttonInterval = setInterval(() => {
      const chatButton = document.querySelector('.minimized-button');
      if (chatButton) {
        chatButton.addEventListener('click', function() {
          console.log("Chat button clicked, attempting to add note...");
          setTimeout(addNote, 500); // Delay to allow widget to render
        });
        console.log("Chat button found and event listener added");
        clearInterval(buttonInterval); // Stop checking once button is found
      } else if (buttonAttempts >= maxButtonAttempts) {
        console.log("Failed to find chat button after max attempts");
        clearInterval(buttonInterval); // Stop after max attempts
      }
      buttonAttempts++;
    }, 100); // Check every 100ms
  }, 3000); // Initial 3-second delay
});
