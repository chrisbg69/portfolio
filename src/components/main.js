import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/portfolio" component={LandingPage} />
    <Route path="/portfolio/aboutme" component={AboutMe} />
    <Route path="/portfolio/contact" component={Contact} />
    <Route path="/portfolio/projects" component={Projects} />
    <Route path="/portfolio/resume" component={Resume} />
  </Switch>
)

export default Main;
