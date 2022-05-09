import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Inicio from './Inicio';
import Servicos from './Servicos';
import QuemSomos from './QuemSomos';

import Header from './Header';
import LogoRow from './LogoRow';

import './style.scss';

import { data } from './data';

function Website() {
  return (
    <div className="global-wrapper">
      <Router>
        <Header links={data.headerLinks} />
        <LogoRow imagePath={data.logoPath}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
          <Route path="/inicio">
            <Inicio features={data.features} paragraphs={data.homeParagraphs} benefits={data.benefits} />
          </Route>
          <Route path="/servicos">
            <Servicos features={data.features} />
          </Route>
          <Route path="/quem-somos">
            <QuemSomos paragraphs={data.aboutUsParagraphs} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Website;
