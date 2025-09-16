
document.addEventListener('DOMContentLoaded', function() {
  var widgetScript = document.createElement('script');
  widgetScript.src = 'https://buildmyagent.io/widget/68a9528b831042b84e277e67/widget-professional.js?widgetId=68a9528b831042b84e277e67';
  widgetScript.async = false;
  document.head.appendChild(widgetScript);

  widgetScript.onload = function() {
    window.AIChatWidget.init({
      widgetId: "68a9528b831042b84e277e67"
    });

    function addNote() {
      const chatWidget = document.querySelector('.ai-chat-widget');
      console.log("addNote called!");
      //const chatWidget = document.querySelector('.professional-widget-container');
      console.log("chatWidget: " + chatWidget);
      if (chatWidget) {
        const existingNote = chatWidget.querySelector('.custom-note');
        console.log("existingNote: " + existingNote);
        if (!existingNote) {
          const note = document.createElement('div');
          note.className = 'custom-note';
          note.innerHTML = 'Powered by <a href="https://whitelevels.com" target="_blank">WhiteLevels</a>';
          note.style.color = '#d4d4d4';
          note.style.fontSize = '12px';
          note.style.textAlign = 'center';
          note.style.position = 'absolute';
          note.style.bottom = '0';
          note.style.left = '0';
          note.style.right = '0';
          chatWidget.appendChild(note);

          const updateVisibility = () => {
            const chatWidgetRect = chatWidget.getBoundingClientRect();
            if (chatWidgetRect.width >= chatWidgetRect.height) {
              // If width is greater than height, make custom-note invisible
              note.style.display = 'none';
            } else {
              // If width is smaller than or equal to height, make custom-note visible
              note.style.display = 'block';
            }
          };
          updateVisibility();

          const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
              if (entry.target === chatWidget) {
                updateVisibility();
              }
            }
          });
          
          resizeObserver.observe(chatWidget);
        }
      }
    }

    setTimeout(() => {addNote();}, 2000);
    setTimeout(() => {
      let buttonAttempts = 0;
      const maxButtonAttempts = 180;
      const buttonInterval = setInterval(() => {
        //const chatButton = document.querySelector('.minimized-button');
        console.log("button interval started ");
        const chatButton = document.querySelector('.rounded-full');
        console.log("button interval chatButton: " + chatButton);
        if (chatButton) {
          chatButton.addEventListener('click', function() {
            console.log("button interval chatButtonClicked!");
            setTimeout(addNote, 500); // Delay to allow widget to render
          });
          clearInterval(buttonInterval);
        } else if (buttonAttempts >= maxButtonAttempts) {
          clearInterval(buttonInterval);
        }
        buttonAttempts++;
      }, 100);
    }, 3000); // Initial delay to ensure DOM is ready
  };

  // Error handling
  widgetScript.onerror = function() {
    console.error('Failed to load widget.js');
  };
});
