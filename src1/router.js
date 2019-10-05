import React from 'react';

import FirstPage from "./components/firstPage/FirstPage";
import MoreInformation from "./components/moreInformation/MoreInformation";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Hall from "./components/hall/Hall"

const Router = () => {
    return (
        <div className={"wrapper"}>
            <Switch>
                <Route exact path={"/"} component={FirstPage}/>
                <Route exact path={"/moreInformation/:name"} component ={MoreInformation}/>
                <Route exact path = {"/Hall"} component = {Hall}/>
                <Route component={NotFound}/>
            </Switch>


        </div>
    );
};

export default Router;
