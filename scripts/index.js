'use strict';

import '!style!css!../css/style.css';
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Redirect, Link, Route, RouteHandler } from 'react-router';
import App from './App';
import PagePannel from './PagePannel';
import CanvasPannel from './CanvasPannel';

let routes=(
	<Route name="app" path="/pageList/:magazineId" handler={App}>
		<Route name="switchPage" path="page/:pageId" handler={CanvasPannel}/>
		<DefaultRoute handler={CanvasPannel}/>
  	</Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
	React.render(<Root/>, document.body);
});
