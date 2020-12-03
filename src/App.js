import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/signup">
                        <SignupContainer/>
                    </Route>
                    <Route path="/">
                        <LoginContainer/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;