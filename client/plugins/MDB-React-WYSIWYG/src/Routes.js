import React from "react";
import { Route } from "react-router-dom";
import basicExamples from './basic-examples';
import colorExample from './color-example';
import translationExample from './translation-example';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={basicExamples} />
            <Route exact path="/color" component={colorExample} />
            <Route exact path="/translation" component={translationExample} />
        </>
    )
}

export default Routes;