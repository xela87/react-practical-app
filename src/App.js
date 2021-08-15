import React from "react";
import './styles/App.css'
import Posts from "./pages/Posts";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import ComponentsSimple from "./pages/ComponentsSimple";
import Error from "./pages/Error";

function App() {
    return (
        <div className="App">
            <hr style={{margin: "15px 0"}}/>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/comps"><ComponentsSimple/></Route>
                    <Route path="/posts"><Posts /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/error"><Error /></Route>
                    <Redirect to="/error"/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
