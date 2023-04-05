const omdbApiKey = '22e2bf56';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'replaceMovieName') {
    replaceMovieName();
  }
});
  

function replaceMovieName() {
    const selection = window.getSelection();
    const selectedText = getTextFromNotionSelection(selection) || selection.toString();
  
    if (selectedText) {
      // Delete the selected text
      const range = selection.getRangeAt(0);
      range.deleteContents();
  
      fetch(`https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(selectedText)}&type=movie`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === 'True' && data.imdbID) {
            const imdbLink = `https://www.imdb.com/title/${data.imdbID}/`;
              insertImdbLink(imdbLink);
              setTimeout(function(){}, 100);
            //alert('IMDb link copied to clipboard.');
          } else {
            alert('Movie not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }
  
  
  function insertImdbLink(imdbLink) {
    // Place the IMDb link in the clipboard
    navigator.clipboard.writeText(imdbLink).then(() => {
      console.log("IMDb link copied to clipboard:", imdbLink);
    }).catch((error) => {
      console.error("Error copying IMDb link to clipboard:", error);
    });
  }
  
  
  function getTextFromNotionSelection(selection) {
    if (selection.anchorNode && selection.focusNode) {
      const startOffset = Math.min(selection.anchorOffset, selection.focusOffset);
      const endOffset = Math.max(selection.anchorOffset, selection.focusOffset);
      return selection.anchorNode.textContent.slice(startOffset, endOffset);
    }
    return null;
  }
  