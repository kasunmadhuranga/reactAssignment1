import React, { useState } from 'react';
import Header from "./Header";
import HomePage from "./home-page/HomePage";
import {OtherPage} from "./OtherPage";
import { Route, Switch } from "react-router-dom";

interface Props {

}

const Layout = (props: Props) => {


    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} >
                </Route>
                <Route path="/other/:id" component={OtherPage}>
                </Route>
            </Switch>
        </>
    )
}

export default Layout;