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
      fetch(`https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(selectedText)}&type=movie`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === 'True' && data.imdbID) {
            const imdbLink = `https://www.imdb.com/title/${data.imdbID}/`;
              insertImdbLink(imdbLink, selection);
              //sleep for 100ms
                setTimeout(function(){}, 100);
            //alert('IMDb link inserted.');
          } else {
            alert('Movie not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }
  
  function insertImdbLink(imdbLink, selection) {
    const linkElement = document.createElement('a');
    linkElement.href = imdbLink;
    linkElement.target = '_blank';
    linkElement.textContent = imdbLink;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(linkElement);
  }
  
  function getTextFromNotionSelection(selection) {
    if (selection.anchorNode && selection.focusNode) {
      const startOffset = Math.min(selection.anchorOffset, selection.focusOffset);
      const endOffset = Math.max(selection.anchorOffset, selection.focusOffset);
      return selection.anchorNode.textContent.slice(startOffset, endOffset);
    }
    return null;
  }
  