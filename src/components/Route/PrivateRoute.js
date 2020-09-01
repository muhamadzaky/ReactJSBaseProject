import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import Cookies from 'universal-cookie'
import moment from 'moment'

const cookies = new Cookies()

const { Header, Footer } = Layout

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            cookies.get("session") !== undefined ?
            <>
              <Header style={{ padding: 0, background: '#fff' }}>Header</Header>
              <Component {...props} />
              <Footer style={{ textAlign: 'center' }}>&copy;{moment(new Date()).format('YYYY')} ・ Developed with <HeartTwoTone twoToneColor="#eb2f96" /> by Muhamad Zaky</Footer>
            </>
            : <Redirect />
        )} />
    );
};

export default PrivateRoute;