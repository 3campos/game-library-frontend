### <ins> Live application </ins>
- [Click here to see the live application](https://game-library-frontend.herokuapp.com/)

### <ins> Code repositories</ins>
- [Frontend](https://github.com/3campos/game-library-frontend)
- [Backend](https://github.com/3campos/game-library-backend)

### <ins> Purpose of Video Game Library </ins>

I created Video Game Library to allow users to have a place to note their progress for complex games. A common theme among my friends and I who love playing video games is that whenvever we had to step away from a complex game for several days or weeks, it was difficult to remember what our personal strategies or battle plans were originally. For example, maybe I wanted to complete particular side quests or collect rewards to buy particular equipment in preparation for a challenging boss battle. Video Game Library solves this problem by allowing gamers to note their strategies so that the next time they sit down to play a game, they can spend more time gaming and less time struggling to recreate their original master plan.

### <ins> Application features </ins>

Video Game Library is a mobile and desktop responsive application, with a secure Google sign feature that is supported by an OAuth authorization framework.

Users can create a library of games that they are currently playing. For each game, users can add an image, rating, play duration, genre and personal notes. Users also have the option to edit and delete games, as well as share games with other users on the platform. 

Regarding the game sharing feature, when games are shared between users, CRUD operations are limited for users that are "following" the game based on their Google credentials. The way this works is that the application compares the logged in user's credentials to the game owner's credentials attached to a specific game. If the credentials match, then full CRUD operations are allowed. If the logged in user has had games shared with them by other users, the application will allow them to view these games but prohibit them from modifying or deleting those games. 

From the home page of the application, users can view: (1) their own library of games; (2) games that have been shared with them; and (3) a library of popular games that are imported from a third-party API.

### <ins> Game sharing feature in action </ins>: [Click here to watch a game being shared between 2 users](https://drive.google.com/file/d/1wJ-qCjnV274QkE5gbJkp3HPdYIXkdcgf/view?usp=sharing)

### <ins> Desktop view </ins>
<img width="1433" alt="Screen Shot 2024-06-10 at 11 38 52 PM" src="https://github.com/3campos/game-library-frontend/assets/105468537/6ea96bb4-89f1-4a7d-95d4-98e5dea2ae9f">

### <ins> Mobile view </ins>
<img width="310" alt="Screen Shot 2024-06-11 at 12 12 35 AM" src="https://github.com/3campos/game-library-frontend/assets/105468537/608ea60f-dbc2-4204-aa47-bd9180b71dcb">

### <ins> Technologies used </ins>
- React
- Javascript
- OAuth
- MongoDB
- Express
- Node
- Tailwind

### <ins> Dependencies used </ins>
- react
- react-dom
- react-router-dom
- react-scripts
- web-vitals

### <ins> Wireframe </ins>
https://git.generalassemb.ly/seirfx-cosmos/capstone-project/issues/11
