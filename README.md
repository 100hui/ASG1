# ASG1 -- Geng Baihui

My project is a comprehensive website for Identity V, a globally popular asymmetrical horror game. The site is designed to cater to both dedicated players and those new to the game, offering an immersive space to explore its features and content. With a design inspired by the game’s gothic style, it provides easy access to key features such as weekly news, tournament highlights, and detailed character stories. The website also includes a user-friendly login interface for players to connect with their game accounts.

The platform offers engaging content, from the backstories of Survivors and Hunters to explanations of the game’s unique mechanics. Whether users are looking for gameplay tips, delving into the rich lore, or staying updated with the latest events, this website serves as a central hub for all things Identity V.

## Design Process
The design process for this website focused on understanding the needs of Identity V players and fans. It was developed with a user-first approach to meet the expectations of both experienced players and newcomers curious about the game. The goal was to create a mobile-friendly platform that delivers essential information while enriching the gaming experience by immersing users in the world of Identity V.

Here is the list of user stories and how my project is the best way to help them achieve these things: 
- 'As a regular player, I want to stay updated with weekly news and tournaments, so that I can remain informed about the latest events in the game.' -- The homepage features a dedicated news section and tournament highlights, making it easy to stay informed about updates and events. 
* 'As a newcomer, I want to explore the game’s background and features, so that I can understand its mechanics and unique gameplay style.' -- The background and game features pages provide clear, engaging overviews and detailed explanations of the game's mechanics and style. 
+ 'As a competitive player, I want to watch high-level match videos, so that I can improve my skills and strategies.' -- The homepage includes a section for match videos, allowing players to easily watch and learn from high-level gameplay. 
- 'As a lore enthusiast, I want to read detailed backstories of Survivors and Hunters, so that I can dive deeper into the characters' narratives and connect with the game's universe.' -- The characters page showcases in-depth backstories and skills for both Survivors and Hunters, offering a comprehensive lore experience. 
* 'As a mobile user, I want an interface optimized for small screens, so that I can easily navigate and interact with the website on the go.' -- The website is designed with a mobile-first approach, ensuring seamless navigation and interaction on smaller screens.

## Features
### Existing Features
+ Homepage: Provides users with the latest news, gameplay videos, and recommended articles to keep them updated and engaged. 
- Background Page: Allows users to explore the game’s lore, backstory, and gothic themes, offering insight into the world of Identity V. 
* Game Features Page: Highlights the game’s unique mechanics and features, helping users understand its asymmetrical gameplay and customization options. 
+ Characters Page: Divided into survivors and hunters sections, this page provides detailed backstories and skills, allowing players to connect with and strategize around their favorite characters. 
- Machandise Page: A dedicated page showcasing game-related merchandise for fans to explore and purchase. 
* Login Page: Offers a simple interface for players to log in using their game ID, enabling easy account access and connectivity. 
+ Mobile-Responsive Navigation: Ensures users can seamlessly navigate the site on mobile devices, with optimized layouts and a user-friendly design. 
- Login Page: Offers a simple interface for players to log in using their game ID, enabling easy account access and connectivity. Users are required to fill out both the game ID section and drop-down session for server selection to complete the login process and continue. This ensures proper authentication and connection to the desired server.
### Features Left to Implement 
+ In-Game Stats Integration: Allows users to log in and view their personal game statistics, like win rates, favorite characters, and match history. 
- Community Page: A section for fans to share artwork, stories, or tips, fostering a stronger player community. 
* Search Functionality: A search bar enabling users to quickly find specific content like characters, features, or guides. 

## Technologies Used
+ [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
    - Used to structure the content and layout of the website. 
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - Used for styling the website, including layouts, colors, and responsive design. 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - This project uses JavaScript to add interactivity. 
+ [GitHub](https://github.com/)
    - Used as a repository to store the project and facilitate collaboration. 
- [Figma](https://www.figma.com/)
    - Used for collaborative design work and prototyping during the initial stages. 
* [VS Code](https://code.visualstudio.com/)
    - The primary code editor used for writing, debugging, and managing the project. 

## Testing 
### Homepage Testing
1. Scenario: Check news updates, videos, and recommended articles. 
    - Navigate to the homepage. 
    - Verify that the latest news and videos are displayed correctly. 
    - Confirm that clicking on a recommended article opens the correct page. 
    - Ensure all sections load and display properly on mobile and desktop screens. 
2. Scenario: Test navigation to other sections. 
    - Use the homepage navigation bar to visit all other pages (e.g., Background, Game Features, Characters, Login).
    - Confirm the navigation links are functional and lead to the correct pages.
### Background Page Testing 
1. Scenario: Verify background content and design. 
    - Visit the Background page.
    - Confirm the text and images load correctly and match the game’s theme.
    - Ensure the page adjusts properly on mobile devices.
2. Scenario: Test navigation. 
    - Use the mobile navigation bar to switch between other pages. 
    - Confirm the bar slides with the content as expected. 
### Game Features Page Testing 
1. Scenario: Check game features carousel. 
    - Navigate to the Game Features page.
    - Confirm all feature cards display correctly and animations (e.g., expanding cards) work as expected.
    - Verify the page adjusts seamlessly on smaller screens.
### Characters Page Testing 
1. Scenario: Validate Survivors and Hunters sections. 
    - Visit the Characters page and check that both Survivors and Hunters sections load correctly.
    - Click on character links/images to verify the backstories and skill details display properly.
2. Scenario: Test mobile layout. 
    - Confirm that the navigation bar slides with the content on both Survivors and Hunters pages.
    - Verify images and text align correctly on small screens.
### Login Page Testing 
1. Scenario: Validate the login form. 
    - Try to submit the form with one or both fields empty. Confirm an error message appears indicating required fields.
### General Testing 
1. Responsive Design: 
    - Tested on different screen sizes (desktop, tablet, and mobile) to confirm that the layout adjusts correctly.
    - Verified that mobile-only features, such as the navigation bar, are hidden on desktop.
2. Browser Compatibility: 
    - Tested the website on Google Chrome and Microsoft Edge to ensure consistent functionality and appearance. 
3. Accessibility: 
    - Confirmed the site is navigable using a keyboard and that screen readers correctly interpret key content. 
### Bugs and Issues 
1. Bug: Navigation bar overlap on small screens. 
    - Issue: The fixed navigation bar occasionally overlapped with page content.
    - Resolution: Added margin-top to content sections to prevent overlap.
2. Bug: Card animations not triggering on mobile devices. 
    - Issue: Touch input did not activate some hover-based effects.
    - Resolution: Replaced hover effects with click-based animations for mobile users.
### Future Testing Enhancements 
1. Automate form validation and navigation testing using tools like Selenium or Cypress. 
2. Perform extensive testing on more devices and browsers to identify edge cases. 

## Credits
### Content 
+ The text for the Background section was adapted from the [official Identity V website](https://idv.163.com/). 
- Character backstories and descriptions (e.g., Survivors and Hunters) were referenced from the [Identity V Wiki](https://id5.fandom.com/wiki/Identity_V_Wiki) and [official Identity V website](https://idv.163.com/). 
### Media 
+ The photos used in this site, including character images and background visuals, were sourced from the official Identity V social media and promotional materials.
- Additional images were obtained from free and open-source platforms like Unsplash and Pexels, ensuring no copyright violations. 
### Acknowledgements 
+ I received inspiration for this project from my passion for Identity V and its creative community. 
- Special thanks to the Identity V community forums for providing valuable insights into the player experience and preferences. 