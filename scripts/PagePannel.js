'use strict';
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import PageStore from './PageStore';
import AppDispatcher from './AppDispatcher';

var PageItem=React.createClass({
	mixins: [ Router.State ],
	handleClick:function(){
		// TODO 这样调用时不卡的，不知道是否和hot－load有关
		// PageStore.clearPage();
		// PageStore.loadPage(this.props.pageItem.id);
		AppDispatcher.dispatch({
			eventName:'loadPage',
			pageId:this.props.pageItem.id
		});
	},
	render: function() {
		let style = {
			margin: '5px 5px 5px 5px',
			width: '95%', // TODO 右空白边有问题才这么做的
			height: '40px',
			minHeight: '40px',
			backgroundColor:'SpringGreen',
  			display: 'flex',
 		  	alignItems: 'center'
		};

		var params={
			pageId:this.props.pageItem.id,
			magazineId:this.getParams().magazineId
		};

		return ( 
			< div className = "pageItem"
				style = {style} >
				<span>{this.props.pageIndex}.</span>
				<Link to="switchPage" params={params} onClick={this.handleClick}>
					{this.props.pageItem.name}
				</Link>
			< /div>
		);
	}
});

var PagePannel=React.createClass({
	mixins: [ Router.State ],
	handleAddClick:function(){
		// PageStore.createPage();
		// PageStore.reload();
		AppDispatcher.dispatch({
			eventName:'createPage'
		});
	},
	handleDeleteClick:function(){
		console.log('delete pageItem');
	},
	getInitialState:function(){
		return {pageList:[]};
	},
	componentDidMount:function(){
		PageStore.on('pageListLoadded',function(){
			this.setState({
				pageList:PageStore.pageList
			});
		}.bind(this));
		PageStore.loadPageList(this.getParams().magazineId);
	},
	render:function(){
		var pageIndex=0;
		var pageItems=this.state.pageList.map(function(pageItem){
			pageIndex++;
			return (
				<PageItem key={pageItem.id} pageIndex={pageIndex} pageItem={pageItem}/>
			);
		});

		var pageListStyle={
			display: 'flex',
  			flexFlow: 'column',
  			flex:1
		};

		var buttonStyle={
			width:'95%',
			margin: '5px 5px 5px 5px',
			height:'30px'
		};

		return ( 
			< div id = "rightPannel" >
				<div style={pageListStyle}>
					{pageItems}
				</div>
				<button style={buttonStyle} onClick={this.handleAddClick}>添加</button>
				<button style={buttonStyle} onClick={this.handleDeleteClick}>删除</button>
			</div>
		);
	}
});

export default PagePannel;

