import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../components/home/home.jsx';
import Detail from './../components/detail/detail.jsx';
import Plan from './../components/plan/plan.jsx';

const BasicRoute = (props) => {
    Home.prototype.propsData = props.routerData;
    Detail.prototype.propsData = props.routerData;
    Plan.prototype.propsData = props.routerData;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
            <Route path="/plan" component={Plan} />
        </Switch>
    );
}


export default BasicRoute;