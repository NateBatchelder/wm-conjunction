import React from "react";
import { Route } from "react-router-dom";
import gallery from './gallery';
import lightbox from './lightbox';
import customComponent from './customComponent';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={gallery} />
            <Route exact path="/lightbox" component={lightbox} />
            <Route exact path="/custom-component" component={customComponent} />
        </>
    )
}

export default Routes;