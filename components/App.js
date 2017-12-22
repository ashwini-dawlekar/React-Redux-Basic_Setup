import React from 'react'
import BookContainer from '../containers/BookContainer'
import AddBookContainer from '../containers/AddBookContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import UserDetails from './BookDetails';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import ReactDOM from 'react-dom';


class App extends React.Component {

    render() {
        return(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/add" component={ AddBookContainer } />
                            <Route path="/details" component={ BookDetailsContainer }/>
                            <Route path="/" component={ BookContainer } />
                        </Switch>
                    </div>
                </Router>
        );
    }
};


export default App