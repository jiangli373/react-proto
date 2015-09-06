'use strict';
import React from 'react';
import MenuBar from './MenuBar';
import TemplatePannel from './TemplatePannel';
import PagePannel from './PagePannel';
import CanvasPannel from './CanvasPannel';

export default class App extends React.Component {
	render() {
		return (
			<div id="root">
				<MenuBar></MenuBar>
				<div id="content">
					<TemplatePannel></TemplatePannel>
					<CanvasPannel></CanvasPannel>
					<PagePannel></PagePannel>
				</div>
				<div id="bottomBar"></div>
			</div>
		);
	}
}