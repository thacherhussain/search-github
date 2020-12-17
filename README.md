# Search GitHub App
A react application that allows the user to search GitHub repositories ranked by stars


## How to run, test, and build this application locally
- Clone this repository
- From the project directory run `yarn` to install the dependencies


**To run the application:** 
From the project directory run `yarn start`

You will then be able to view the application in your browser here: [http://localhost:3000](http://localhost:3000)


**To test this application:**
From the project directory run `yarn test`

This launches the test runner in the interactive watch mode


**To build this application:**
From the project directory run `yarn build`

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## How I would improve this application
- Add testing (beyond the out of the box simple single test provided with Create React App)
- Reevaluate the UI both inside and outside of continuing to use react-bootstrap
  - move styling that is currently inline to either the `custom.scss` or use something like `styled-components` to make style changes in a component easier to reuse when that same component is needed elsewhere in the application
  - confirm the accessibility of the application
  - Look at limiting the results and/or pagination
- Use [downshift]() to provide autocomplete search capability while not sacrificing accessibility
- Use the v4 GitHub API to use to take advantage of the benefits of GraphQL
- Possibly display more repo details in each search result, create a modal with more information, or generate a page that would display more information about the repo instead of having the button link take them out of the application entirely
- Deploy this app using something like heroku or netlify

### Requirements
- Build a search UI that displays a list of GitHub user's repositories ranked by stars
- Prioritize testing, features, UI / UX however you see fit, but develop the app as if it is a tool that users will be using on a daily basis
- Use either the REST or GraphQL GitHub API. Please do not use a library for querying
- Please make sure to include all instructions needed for testing, building, and running your app
- After your instructions, please also add notes on what you would have added to the app if you had more time
- Desired Result: when you search for Facebook, it will return the react and react-native repositories at the top of the list

**NOTE on Desired Results**: Test cases confirmed by searching on the GitHub site with search terms and ranked by stars differ from the above requirement. At first I thought this had to be wrong, but I checked and rechecked the results on GitHub (and have provided the links to the GitHub web app searches below) The first three results for the following search terms are: 
  - "React": freeCodeCamp/freeCodeCamp, facebook/react, facebook/react-native
    - [React GitHub Site Search Results](https://github.com/search?o=desc&q=react&s=stars&type=Repositories)
  - "Facebook": facebook/jest, fighting41love/funNLP, davideuler/architecture.of.internet-product
    - [Facebook Github Site Search Results](https://github.com/search?o=desc&q=facebook&s=stars&type=Repositories)


### Process
- Used create-react-app to bootstrap a basic react application
- Added Requirements to the README
- Researched the best way to design and build features to satisfy the requirements
- Created basic components needed to display results from the GitHub API
- Built out the functionality to display the desired results from GitHub
- Built the UI to be simple and functional
- Conducted visual testing of UI and functionality, testing this application's results against results for the same searches on the GitHub site
- Added more detailed information about the application to the README.md
- Last checks over code, UI, and functionality
- Pushed to GitHub
- Cloned the application to a different directory on my computer to test the instructions for running, testing, and building the application as listed in this README


## Stack Used
- React
- TODO list from package.json


### Decisions Made
- Use GitHub API v3 to complete this application using REST to prioritize time over possible (very minimal) performance gains since it is such a small application
- Use React-Bootstrap to build out a solid, but simple UI as quickly as possible, also providing the ability to ensure that the application would be responsive and therefore fit multiple screen sizes that different users might need in daily use
- Not to add additional testing to the application, prioritizing functionality, UI/UX, and testing in that order. In the interest of time I decided to forgo adding additional tests



Credit where credit is due... this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).