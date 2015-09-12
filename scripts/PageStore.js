import {EventEmitter} from 'events';
import axios from 'axios';
import _ from 'lodash';
import AppDispatcher from './AppDispatcher';

class PageStore extends EventEmitter {
	constructor(){
		super();
		AppDispatcher.register(function(payload){
			switch(payload.eventName){
				case 'loadPage':
					this.clearPage();
					this.loadPage(payload.pageId);
					console.log('load page .. ok');
					break;
				case 'createPage':
					this.createPage();
					this.reload();
					break;
				case 'deletePage':
					this.deletePage(payload.pageId);
					this.reload();
					break;
			}
			return true;
		}.bind(this));
	};
	loadPageList(magazineId) {
		this.magazineId=magazineId;
		axios.get('/api/pageList/' + magazineId).then(function(response) {
			this.pageList = response.data.pageItems;
			this.emit('pageListLoadded');
		}.bind(this)).catch(function(response) {
			console.log('>>>load page list error! '); //TODO 整体解决错误处理
		});
	};
	loadPage(pageId) {
		if(!pageId){
			pageId=this.getFirstPageId();
		}
		axios.get('/api/page/' + pageId).then(function(response) {
			this.page = response.data.page;
			this.emit('pageLoadded');
		}.bind(this)).catch(function(response) {
			console.log('>>>load page error!'); //TODO 整体解决错误处理
		});
	};
	getFirstPageId() {
		if (this.pageList && this.pageList.length > 0) {
			return this.pageList[0].id;
		}
		return null;
	};
	clearPage() {
		this.page = null;
	};
	createPage() {
		axios.post('/api/page', {
				name: ''
			})
			.then(function(response) {
				console.log('>>>creat ok!');
			})
			.catch(function(response) {
				console.log('>>>load page error!'); //TODO 整体解决错误处理
			});
	};
	deletePage(pageId){
		axios.delete('/api/page/'+pageId)
			.then(function(response) {
				console.log('>>>delete page ok!');
			})
			.catch(function(response) {
				console.log('>>>load page error!'); //TODO 整体解决错误处理
			});
	};
	reload(){
		this.page=null;
		this.pageList=null;
		this.loadPageList(this.magazineId);
	}
}

let _PageStore = new PageStore();
export default _PageStore;