import React from "react";
import { Route } from "react-router-dom";
import basicExamples from './basic-examples';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={basicExamples} />
        </>
    )
}

export default Routes;