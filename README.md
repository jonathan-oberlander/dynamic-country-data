# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### About the stream in Rx:

I found it would be a good use case for a dynamic search / typehead. There is definitely room for improvement, specially for the error handling. However, I included a basic retry on error which is something usefull for bad connections. The dynamic search could be replicated in pure React/Redux with proper throttle/debounce and would bring other advantages as well.

## Run the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
