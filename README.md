# MovieLink for Notion

MovieLink is a Chrome Extension that allows you to quickly replace movie names with their IMDb links as bookmarks in Notion using the OMDB API. 

![MovieLink for Notion Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- Automatically fetch IMDb links for movie titles
- Delete selected movie name and save IMDb links to the clipboard for bookmark creation
- Keyboard shortcut for quick usage

## Installation

1. Clone this repository or download the ZIP file and extract it to a folder on your computer.
2. Open the Chrome browser and navigate to `chrome://extensions`.
3. Enable the "Developer mode" toggle in the top right corner.
4. Click on the "Load unpacked" button and select the folder where you extracted the repository.
5. The QuickMovie extension should now be installed and visible in your extensions list.

## Usage
*if the extension does not work, it might be because the OMDB API key has expired. You can change it in content.js. An update to this system is coming. OMDb API Keys are free for 1000 uses/day.*
1. Open Notion in your Chrome browser and type the name of a movie.
2. Select the movie name with your cursor.
3. Press `Ctrl+Shift+R` to delete the movie name and copy the IMDb link to your clipboard.
4. In Notion, paste the link (using `Ctrl+V` or `Cmd+V`), and select the option to create a bookmark.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
