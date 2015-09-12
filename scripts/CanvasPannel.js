'use strict';
import React from 'react';
import Router from 'react-router';
import _ from 'lodash';
import PageStore from './PageStore';
import AppDispatcher from './AppDispatcher';

var CanvasPannel=React.createClass({
	mixins: [ Router.State ],
	getInitialState:function(){
		return {};
	},
	componentDidMount:function(){
		PageStore.on('pageListLoadded',function(){
			AppDispatcher.dispatch({
				eventName:'loadPage',
				pageId:this.getParams().pageId
			});
		}.bind(this));
		PageStore.on('pageLoadded',function(){
			this.setState({
				page:PageStore.page
			});
		}.bind(this));
	},
	render:function(){
		var pageId=this.props.params.pageId;

		if(!pageId){
			pageId=PageStore.getFirstPageId();
		}
		
		return (
			<div id="centerPannel">
				<Canvas />
			</div>
		);
	}
});

export default CanvasPannel;

var Canvas=React.createClass({
	render:function(){
		if(!PageStore.page){
			return (
				<div id="canvas">Loading ..</div>
			);
		}else{
			return (
				<div id="canvas">{PageStore.page.name}</div>
			);
		}
	}
});	