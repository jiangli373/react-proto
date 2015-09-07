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

		if(this.props.params.pageIndex){
			pageNo=parseInt(this.props.params.pageIndex)+1;
		}

		// console.log('>>>>>>page index: '+this.props.params.pageIndex);
		
		return (
			<div id="centerPannel">
				<div id="canvas">第 {{pageNo}} 页</div>
			</div>
		);
	}
}