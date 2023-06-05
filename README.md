# React III Quiz

## Instructions
1. Fork and clone this repo (no branches, no PRs necessary).
2. Run ```npm install``` and ```npm start```
3. Add functionality to the existing React components to achieve the objectives.
4. Push up your code (do this often).
5. After time is up, import YOUR repo into CodeSandbox.io and send me the link via Teams private message.

## Objectives
You are to create a simple todo list application using React. The application should have the following features:

### Challenge 1: Todo list and API
"HomePage": (http://localhost:3000/home)
1. Users can enter a todo item in an input field.
2. When the user clicks a "Add" button, the todo item should be added to a list displayed on the screen.
3. The list should be stored in the browser's localStorage, so that the todos persist even after refreshing the page.
4. Each todo item in the list should have a "Delete" button, which removes the todo from both the list and localStorage.
5. Make the "Fill in list" button work - should fetch data from this web API: https://jsonplaceholder.typicode.com/posts/

### Challenge 2: Page Navigation and local storage
"LoginPage": (http://localhost:3000)
1. Users can log in by providing a username and password - any username or password should work.
2. After successful login, the username and password should be stored in localStorage and also console.logged.
3. Once logged in, the user should be redirected to a "Home" page (react router redirect), which displays a Todo List.
bonus - add functionality to the Logout button in the "Home page" (should take users back to Sign In page).

For both challenges, encourage the use of React Query for handling data fetching and caching.
