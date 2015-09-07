'use strict';
import React from 'react';

import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class PagePannel extends React.Component {
	componentDidMount(){
	};
	render() {
		return ( 
			< div id = "rightPannel" >
				<PageItem number={1} />
				<PageItem number={2} />
				<PageItem number={3} />
				<PageItem number={4} />
			</div>
		);
	}
}

class PageItem extends React.Component {
	render() {
		let style = {
			margin: '5px 5px 5px 5px',
			width: '95%', // TODO 右空白边有问题才这么做的
			height: '40px',
			'min-height': '40px',
			'background-color':'SpringGreen',
			display: '-webkit-flex',
  			display: 'flex',
			'-webkit-align-items': 'center',
 		  	 'align-items': 'center',
  			'-webkit-justify-content': 'center',
    		'justify-content': 'center',
		};
		return ( 
			< div className = "pageItem"
				style = {style} >
				<Link to="switchPage" params={{pageIndex:(this.props.number-1),magazineId:123}}>
					第 {this.props.number} 页
				</Link>
			< /div>
		);
	}
}