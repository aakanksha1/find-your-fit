## Find Your Fit.

Find your fit is a mobile-friendly website where you can try out high-performance workout clothes.
It also provides smart suggestions to individuals based on our questionnaire.

## Firebase
Create firebase project, firestore database and connect to app by following instructions.
https://firebase.google.com/docs/web/setup


### Environment variables

To ensure that this repo works with your own Firebase project, add the following environment variables (taken from Firebase) in a .env file in the root directory:

REACT_APP_API_KEY<br>
REACT_APP_AUTH_DOMAIN<br>
REACT_APP_DATABASE_URL<br>
REACT_APP_PROJECT_ID<br>
REACT_APP_STORAGE_BUCKET<br>
REACT_APP_MESSAGING_SENDER_ID<br>
REACT_APP_APP_ID<br>


## Database

We used firestore for our database.
https://firebase.google.com/docs/firestore



## Available Scripts

In the project directory, you can run:
Make sure you do 'npm install' once you clone it into your local repo.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Needs further development

- Functionality of adding multiple Items to the cart
- Saving personal information via user authentication
- System to update database inventory of items
- Partnerships with suppliers to provide inventory for trial system
- Security for shipping & billing information
- Revision of UX based on user testing
- Functionality for shipping & payment information
- UI needs to be completly responsive over mobile/web.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
