# webpack-react-action

Using react with webpack


## update node and npm
```
$ brew update
$ brew upgrade node
$ npm install -g npm
```

## phpstorm support jsx syntax
switch language version to JSX Harmony manually in Preferences | Languages & Frameworks | JavaScript.

## webpack-react-action
```
$ mkdir webpack-react-action
```


structure:
```
.
+-- src
|   +-- index.js
+-- webpack.config.js
+-- index.html
+-- package.json
```


```
$ npm install webpack --save-dev
$ npm install --save react react-dom babel-loader  babel-core  babel-preset-react  babel-preset-es2015
```

notes: check if there is 'babel-preset-es2015' in node_modules



webpack.config.js
```js
module.exports = {

    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
```
## run webpack

```
$ webpack
```

## run a local webserver with livereload enabled
```
npm install webpack-dev-server --save-dev
```

set liveloader publicPath in webpack-config.js:
```js
output: {
path:     'builds',
filename: 'bundle.js',
publicPath: 'builds'
},
```

then run webpack-dev-server, and visit the web-server at http://localhost:8080/webpack-dev-server/

###Useful links:

[webpack-your-bags](http://blog.madewithlove.be/post/webpack-your-bags/)

[Getting Started react official site](https://facebook.github.io/react/docs/getting-started.html)

### License
Copyright (c) 2016 janeluck. Licensed under the MIT license.
