import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';


const AppRouter = () => (
  <BrowserRouter>
    <Switch> 
        <Route path='/' exact={true} component={App} />                
        <Route component={() => {
            return (
                <div>Not Found: 404</div>
            )
        }} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter };