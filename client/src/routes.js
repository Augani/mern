import React, {Suspense} from "react";
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Index = React.lazy(() => import('./pages'));
function Routes() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch location={location}>
                <Route path="/">
                    <Index/>
                </Route>
              </Switch>
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}



const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

