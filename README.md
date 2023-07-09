# Valorant Ranking
This project is a Valorant ranking application that allows users to view their ranking in the game. It utilizes the Riot Games API to fetch player data and display the ranking information.

## Prerequisites
Before running the project, make sure to add a .env file to the root folder of the project and set the Riot API key to the variable `REACT_APP_API_KEY`. This key is necessary to authenticate API requests and retrieve the required player data.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Deployment
To deploy the Valorant Ranking application, follow the steps below:

1. Build the application using the yarn build command. This will create the optimized production build in the build folder.

2. Deploy the contents of the build folder to a web server or hosting platform of your choice.

3. Ensure that the environment variables are properly configured in the deployed environment, including the Riot API key.

4. Access the deployed application through the appropriate URL to view the Valorant rankings.

>**note**
>Please note that the deployment process may vary
>depending on your hosting platform and specific requirements.
>Make sure to consult the deployment documentation or support
>resources provided by your chosen hosting solution for detailed instructions.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
