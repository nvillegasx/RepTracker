import React from "react"
import { Route, Redirect} from 'react-router-dom'; 
import MainScreen from '../screens/MainScreen';

export const PrivateRoute = () =>(
    <Route path="/mainscreen" 
        render={() => this.props.loggedIn === true ? <MainScreen/> : <Redirect to="/login"/>} 
    />
);