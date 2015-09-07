'use strict';
import React from 'react';
import _ from 'lodash';

export default class CanvasPannel extends React.Component {
	componentWillMount(){

	};
	componentDidMount(){
	};
	render() {
		var pageNo=1;

		if(this.props.params.pageId){
			pageNo=parseInt(this.props.params.pageId)+1;
		}
		
		return (
			<div id="centerPannel">
				<div id="canvas">第 {{pageNo}} 页</div>
			</div>
		);
	}
}