'use strict';
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import axios from 'axios';

export default class PagePannel extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
	    	pageList:[]	
	    };
	};
	componentDidMount(){
		axios.get('/api/pageList.json').then(function(response){
			this.setState({
				pageList:response.data
			});
		}.bind(this)).catch(function(response){
			console.log('error ajax!');
		});
	};
	render() {
		var pageIndex=0;
		var pageItems=this.state.pageList.map(function(pageItem){
			pageIndex++;
			return (
				<PageItem number={pageIndex} page={pageItem}/>
			);
		});
		return ( 
			< div id = "rightPannel" >
				{pageItems}
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
 		  	 'align-items': 'center'
		};
		return ( 
			< div className = "pageItem"
				style = {style} >
				<span>{this.props.number}.</span>
				<Link to="switchPage" params={{pageId:(this.props.number-1),magazineId:123}}>
					{this.props.page.name}
				</Link>
			< /div>
		);
	}
}