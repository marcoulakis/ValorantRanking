# Valorant Ranking

## Overview


 <a href="#screenshot">
    <img src="https://raw.githubusercontent.com/marcoulakis/ValorantRanking/main/public/screenshot.png" alt="Scrennshot-of-the-app" height="300" align="right"/>
  </a>


This project is a Valorant Ranking web application that enables users to view their game ranking. It utilizes the Riot Games API to fetch player data and display the ranking information.

I developed this project for a workshop that I conducted with the objective of teaching the basics of React.js to high school students at a technical school in São Paulo, Brazil.

<br>

## Prerequisites
Before running the project, make sure to add a .env file to the root folder of the project and set the Riot API key to the variable `REACT_APP_API_KEY`. This key is necessary to authenticate API requests and retrieve the required player data.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/marcoulakis/ValorantRanking.git
```

2. Navigate to the project directory:
```
cd ValorantRanking
```

3. Install the project dependencies:
```
yarn install
```

## Available Scripts

In the project directory, you can run the following scripts:

- `start`: Runs the app in the development mode.

```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

- `build`: Builds the app for production to the `build` folder.\

```
yarn run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

- `test`: Launches the test runner in the interactive watch mode.\

```
yarn test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `eject`: **Note: this is a one-way operation. Once you `eject`, you can't go back!**\

```
yarn eject
```

## Deployment
To deploy the Valorant Ranking application, follow the steps below:

1. Build the application using the yarn build command. This will create the optimized production build in the build folder.

2. Deploy the contents of the build folder to a web server or hosting platform of your choice.

3. Ensure that the environment variables are properly configured in the deployed environment, including the Riot API key.

4. Access the deployed application through the appropriate URL to view the Valorant rankings.

>**Note**
>the deployment process may vary depending on your hosting
>platform and specific requirements. Make sure to consult the deployment 
>documentation or support resources provided by your chosen hosting 
>solution for detailed instructions.

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.\
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the [MIT License](LICENSE).
