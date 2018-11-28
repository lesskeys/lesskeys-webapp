# Lesskeys Webapp

This project uses [React](https://reactjs.org/) and [Redux](https://redux.js.org/).

It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction

This webapp is part of the Lesskeys softwarepackage and is used to controlle some crucial settings at the backend server, as well as providing a message service for anyone contacting a user in the system.

The webapp only functions with the Lesskeys Server, which is the RESTful backend for the webapp!<br>

You can set the server address at the proxy value in `package.json`. 


## How to run 

This project uses [yarn](https://yarnpkg.com/en/) to build, so make sure you have that installed.

### Development build

To run the development server, navigate to the project root directory and execute:

```sh
yarn install
yarn start
```

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production build

To run the app as prduction build, we recommend to use `serve`.
Navigate to the project root directory and execute:

```sh
yarn global add serve
yarn install
yarn run build
serve -s build
```

This runs the app as production build.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

If you would like to use a different port, in this example it's port 5000, for deployment, execute `serve -l 5000 -s build` instead.