# react-proto

演示使用react开发项目的原型。

## 安装与运行

git clone:

```
git clone https://github.com/MarshalW/react-proto.git
```

安装所依赖的包（前提是已经安装了nodejs和[webpack](https://webpack.github.io/)）：

```
npm install
```

运行：

```
npm start
```

通过浏览器访问：[http://localhost:3000/](http://localhost:3000/)

## Hot reload

在项目目录下执行：

```
webpack --progress --colors --watch
```

运行后，重新访问[http://localhost:3000/](http://localhost:3000/)，再修改`js`文件，浏览器中打开的index.html将会自动更新。

## 版本历史

切换到历史版本，比如`m1`：

```
git checkout m1
```

* m1: [实现了基本的webpack+react+react hot loader](http://marshal.ohtly.com/2015/09/06/setting-up-webpack-for-react-and-hot-load/)
* m2: [webpack加载css及使用flexbox布局](http://marshal.ohtly.com/2015/09/06/loading-css-with-webpack-and-using-flexbox-layout/)
* m2.1: [编写基本的React组件，替代布局的节点](http://marshal.ohtly.com/2015/09/06/write-basic-react-component/) 
* m3: [使用React Router实现组件的路由](http://marshal.ohtly.com/2015/09/07/using-react-router/)
* m4: [React通过AJAX加载数据](http://marshal.ohtly.com/2015/09/08/React-load-data-via-ajax/)
* m5.3: [使用Flux加载真实数据](http://marshal.ohtly.com/2015/09/10/use-flux-and-load-real-data/)

