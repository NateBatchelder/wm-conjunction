import React from "react";
import { Route } from "react-router-dom";
import basicExamples from './basic-examples';
import usageExample from './usage-example';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={basicExamples} />
            <Route exact path="/usage" component={usageExample} />
        </>
    )
}

export default Routes;