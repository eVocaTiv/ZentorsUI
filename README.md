## ZentorsUI
The front-end application for Zentors. Zentors is a Startup based out of Stanford University, California. I voluteered to work on this project as the UX designer & Web Developer in addition to supervising the tech architecture of the full new website. This is a documentized code of the front-end login based feature of the mockups I proposed based on my interactions with the founder - Rishabh Kothari.

## About Zentors
Zentors is a mentoring program helping students connect with seniors for their higher education guidance around the world.

## Need for ZentorsUI
The current application was built up on wordpress as an experiment with its concomintant limitations of lack of control of data. For an application where the admin has complete control of user traffic on his / her website and other analytics considerations it is important to have a web app made from scratch. 

Another requirement was of new features including a login based system and other prototypes proposed like a video application / online doodle based system for discussions between the mentor and mentee. Moreover, an audio/video call based on pre-booked sessions would help monetize the business more easily than resorting to 3rd party applications.

## Introduction
This mini project was started as an experiment for a re-design of Zentors.org website and software architecture by me. The finalized structure includes - React based SPA in the front-end having new user login functionality which includes server side security using JSON Web Tokens ( https://jwt.io/ ). The backend will make use of Mongo-DB written up in Python. All the servers will be hosted via Heroku using a custom domain: Zentors.com or likewise.

## Some of the features of the login.
### Alerts
Informative alerts at the bottom of the form for failed login & register. Fitting in with the monochromatic color scheme, these placate the user's state of mind.
<p align="center"><img src="screenshots/Zentors Login Error.JPG" /></p>
### An elegant register portal
A simplistic register / login portal switchable at the click of a button. Descriptive with placeholders & buttons with ample areas and spacing for a fluent user experience. 
<p align="center"><img src="screenshots/Zentors Login Screenshot.JPG" /></p>
A customized switch for mentor / mentee login which lets the user know clearly with a cyan background.
<p align="center"><img src="screenshots/Zentors Mentor.JPG" /></p>
### Dashboard skeleton
A similar fashioned dashboard which greets the username logged in ( 'user' in this case ). Using the native 'password' type in the form allows for google's password caching. 
<p align="center"><img src="screenshots/Zentors Password Update Screenshot.JPG" /></p>

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
