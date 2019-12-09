import React from "react";
import Read from "./Read"
import Cards from "./Cards"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function Main() {
  return (
    <>
  
    
    <Router>
        

                <Switch> 
                    <Route path="/" strict   exact  component={Cards} />
                    <Route path="/read" strict  exact  component={Read} />
                </Switch>
        
      </Router>
    </>
  );
}

export default Main;