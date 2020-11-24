import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Headers, Footers } from '../Layout/Layout'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            cookies.get("session") !== undefined ?
            <>
              <Headers />
              <Component {...props} />
              <Footers />
            </>
            : <Redirect />
        )} />
    );
};

export default PrivateRoute;