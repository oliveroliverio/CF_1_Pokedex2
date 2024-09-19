# Pokedex

This is Pokedex, a Pokémon gallery that allows users to search for Pokémon according to desired traits. The application provides a comprehensive and interactive way to explore various Pokémon, view their details, and filter them based on specific characteristics such as type, height, and abilities. Users can also view detailed information about each Pokémon, including images and stats, making it a valuable tool for both casual fans and dedicated Pokémon enthusiasts.


## Project roles
My role in this project was to design the front end and implement fetching data from the API. This involved creating a user-friendly interface using HTML, CSS, and JavaScript, and ensuring that the application is responsive and visually appealing. I also integrated Bootstrap for styling and layout, and implemented the search functionality to allow users to filter Pokémon based on various traits.

Additionally, I was responsible for setting up the API calls to fetch Pokémon data from an external source. This included handling asynchronous requests, parsing the received data, and dynamically rendering the Pokémon cards on the page. I ensured that the data is displayed accurately and efficiently, providing users with a seamless and interactive experience.

## Major deciscions
I've decided to utilize Tailwind CSS because of my familiarity with this CSS framework rather than Bootstrap. Tailwind CSS offers a utility-first approach, which allows for more flexibility and customization in styling components. This approach enables me to apply styles directly within the HTML, reducing the need for writing custom CSS and speeding up the development process.

Tailwind CSS also provides a more granular control over the design, making it easier to create a unique and consistent look and feel for the application. Its responsive design utilities ensure that the application looks great on all devices, enhancing the user experience. Additionally, Tailwind's extensive documentation and active community support make it a reliable choice for this project.

## If I could do something differently
If I could do this differently, I would:
- Utilize a framework such as React for better component-based architecture.
- Leverage React's virtual DOM for improved performance.
- Implement efficient state management with React hooks or Redux.
- Benefit from React's extensive ecosystem and community support.

## Lessons learned
Several things learned from this project include:

- **Utilizing CSS Frameworks**: Leveraging CSS frameworks like Tailwind CSS can significantly streamline the styling process. It allows for rapid development with utility-first classes, reducing the need for custom CSS and ensuring a consistent design across the application.

- **JavaScript Programming**: Implementing JavaScript to fetch data from APIs and dynamically display it on the webpage was a crucial learning experience. This included understanding asynchronous programming with promises and async/await, handling JSON data, and manipulating the DOM to render the fetched data effectively.

- **Responsive Design**: Ensuring the application is responsive and looks good on various devices was another key takeaway. Using Tailwind CSS's responsive utilities made it easier to create a layout that adapts to different screen sizes, enhancing the user experience.

- **API Integration**: Setting up and managing API calls to fetch Pokémon data taught me the importance of handling asynchronous requests and error handling. It also highlighted the need for efficient data parsing and rendering to provide a seamless user experience.

- **Component-Based Design**: Although not implemented in this project, the consideration of using a framework like React in the future emphasized the benefits of component-based design. This approach can lead to more maintainable and scalable code, making it easier to manage and update the application.

- **User Experience**: Focusing on creating a user-friendly interface that is both visually appealing and functional was a significant learning point. Ensuring that users can easily search for and filter Pokémon based on various traits added value to the application.

These lessons have provided valuable insights and skills that can be applied to future projects, enhancing both development efficiency and the quality of the final product.

# Link to repo
https://github.com/oliveroliverio/CF_1_Pokedex2

# Live link
https://oliveroliverio.github.io/CF_1_Pokedex2/

# Linting
Please refer to file `eslint.config.mjs`

# Technologies used
- **HTML**: For structuring the content of the web pages.
- **CSS**: For styling the web pages.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **JavaScript**: For adding interactivity and fetching data from the API.
- **Bootstrap**: For additional styling and layout components.
- **ESLint**: For linting JavaScript code to ensure code quality and consistency.
- **Git**: For version control.
- **GitHub**: For hosting the repository and live site.
- **Pokémon API**: For fetching Pokémon data.
## User Flows

### User Flow 1: Viewing Pokémon Gallery
1. **Landing Page**: User lands on the homepage.
2. **Gallery Display**: User sees a grid of Pokémon cards.
3. **Card Interaction**: User can hover over a card to see a shadow effect.
4. **Details Modal**: User clicks on a card to open a modal with detailed information about the Pokémon.

### User Flow 2: Searching for Pokémon
1. **Search Bar**: User types a Pokémon name or trait in the search bar.
2. **Search Button**: User clicks the search button.
3. **Search Results**: A modal pops up displaying the search results or a message if no results are found.

## User Stories

### User Story 1: Viewing Pokémon Gallery
- **As a** Pokémon enthusiast,
- **I want** to view a gallery of Pokémon,
- **So that** I can explore different Pokémon and learn more about them.

### User Story 2: Searching for Pokémon
- **As a** user,
- **I want** to search for Pokémon by name or trait,
- **So that** I can quickly find specific Pokémon that interest me.