This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



------

# Streaming App

# Notes
Don't do npm intstall react-router, that's the core package. 

If you're creating a web browser app, user -dom (only use -native) if you know you want to 

Also don't use the redux one, its probably over kill, even the writers of the package mention that

## React Router DOM: What is it doing
Router only looks at the path (after the port too)

Components (Routes) decide whether or not to show themselves based on the path that BrowserRouter sees

### How Paths Get Matches
You can have mutliple Route components within the same URL. Router essentially runs `extractedPath.contains(routePath)` when determining the match. You can use `exact` to do an exact match (`===`)
**`exact` keyword**
* If you drop 'exact' from the '/' path, then that Route will always get rendered

## How (NOT) to navigate around ReactRouter

### Do not use anchor tags!
Why? 

1. The browser will dump all the state/rendered code that is currently there (everything in memory)
(So you would have to have the user re-enter all that data (WOOF))
1. When an anchor tag is clicked, the browser will hit the server and return the index.html file 
1. All the compiled .js code is re-downloaded from the server
1. The app then re-starts and renders

### Use `Link`s!
What's funny about Links, is that they are implemented with anchor tags. However, ReactRouter prevents the browser from navigating to a new page, but the URL still changes (ReactRouter detects the click on the anchor tag). The URL change is picked up by the 'History' object, and send the update to BrowserRouter.

This is where the term Single Page App (SPA) comes from. We are just showing and hiding different components based on the route.

## Different Router Types
ReactRouter has three kinds of Routers. The difference is the part of the URL that they look at. 

Why care? -->  Deployment. 

### BrowserRouter
* Looks for the Top Level Domain (TLD), and gets everything after that
* Ex: localhost:3000/**pageTwo**

This is the most complicated when deploying. 
* In traditional web servers, missing routes return 404s. 
* In a react server, it returns the first thing it find in: 1) the development resources with the route, then 2) public directory, and if **still nothing is found,** 3) just returns the index.html file (**AS OPPOSED TO A 404**).
* This is because all the paths are client side

### HashRouter
* Looks for everything after the hash for the path
* Ex: localhost:3000/#/**pageTwo**

With this router, the root path is always loaded (everything after the # is not in the request). This is more flexible for client side rendering. 

### MemoryRouter
* Doesnt use URL to track navigation. This means the URL **will not change** when going between pages

## Headers
We couldddd create a header and add it to every component, but we can just add it once, in the BrowserRouter to always be on the screen.

# OAuth
Check out Google Scopes for OAuth 

Difference between OAuth for Servers/Client-side

Server: 
* Used when app needs user data **when they are not logged in**
* More difficult because they need to store more data about the user 

Client: 
* Used when app needs user data **when they are logged in**

w### Auth
* We want to use Redux for sign in state because thats a common field that will want to be accessed across the app

* However we only want action creators to talk to the GAPI auth compnent, since that is what would change the state (in an ideal world), but we'll disregard that in this setup. 


# Debugging
https://github.com/zalmoxisus/redux-devtools-extension

You can set up debug sessions to checkpoint state like so: `http://localhost:3000/?debug_session=abc`



## Redux Form

Field
 - all about passing data to/from the form to redux state, no real rendering and doesn't know what kind of input is being used 

Redux Form handles all the form-state management, our only job is to wire up the passed in `value`/`onChange` functions to our input element 

When things props are passed to a field function, but they don't match any Field props, the props are by default passd to the component prop as addition props (not a part of input)

Component


Validation
- Every interaction with the form, Redux calls the validate() function, with all of the current values in the form 


    //Redux form calls preventDefaultForYou
    // event.preventDefault();
    //OnSubmit gets called with the values in the form

    - you can turn off autocomplet



## REST

Route:

/streams
GET - List all records
POST - create a stream

/streams/:id
GET - Get a specific record
PUT - Update a record
DELETE - Delete a record
