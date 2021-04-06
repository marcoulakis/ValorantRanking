import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { ApiResponsePlayer } from './components/player';


const AppRouter = () => (
  <BrowserRouter>
    <Switch> 
        <Route path='/' exact={true} component={App} />
        <Route path='/player/:id' component={ApiResponsePlayer}/>

        
        <Route component={app => {
            return (
                <div>Not Found: 404</div>
            )
        }} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter };