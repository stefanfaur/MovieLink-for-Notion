document.addEventListener('DOMContentLoaded', () => {
    const popupElement = document.querySelector('.popup');
    popupElement.style.display = 'block'; // show the popup
  
    setTimeout(() => {
      popupElement.classList.add('animated'); // add the animation class
    }, 50);
  
    const replaceButton = document.querySelector('#replaceButton');
    replaceButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceMovieName' });
      });
      window.close(); // close the popup window after the button is clicked
    });
  });
  