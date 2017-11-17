import React from 'react'
import HelloWorld from './../containers/HelloWorld'
import About from './About';
import UserDetails from './UserDetails';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import ReactDOM from 'react-dom';


class App extends React.Component {

    render() {
        return(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/userDetails" component={ UserDetails } />
                            <Route path="/" component={ HelloWorld } />
                        </Switch>
                    </div>
                </Router>
        );
    }
};


export default App