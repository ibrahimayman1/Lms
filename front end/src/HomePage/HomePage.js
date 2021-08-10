import React from 'react';
import {Route} from 'react-router-dom';
import BelowNav from './components/BelowNav/BelowNav';
import WhyFcifu from './containers/WhyFcifu/WhyFcifu';
import Dashboard from './components/Dashboard/Dashboard';
import UsersUseFcifu from './components/UsersUseFcifu/UsersUseFcifu';

const HomePage = () => {
    return (
        <div>
            <Route path="/" exact component={BelowNav} />
            <Route path="/" exact component={WhyFcifu} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/" exact component={UsersUseFcifu} />
        </div>
    )
}

export default HomePage;
