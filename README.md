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

运行后，再修改`javascript`文件，浏览器中打开的index.html将会自动更新。

## 版本历史

切换到历史版本，比如`m1`：

```
git checkout m1
```

* m1：[实现了基本的webpack+react+react hot loader](http://marshal.ohtly.com/2015/09/06/setting-up-webpack-for-react-and-hot-load/)

