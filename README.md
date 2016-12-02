# Webpack Remove Debug

A very simple [Webpack](http://webpack.github.io/) loader to remove [debug](https://github.com/visionmedia/debug) from your code.

You might want to include debug in your development code, but remove all traces of it from your production code.

This is similar to [strip-loader](https://github.com/yahoo/strip-loader), but requires no parameters and only works for debug, and with very specific conditions.

It removes function calls:

```js
debug( 'Some debug line', stuff );
```

It also removes the require (no support for import):

```js
const debug = require( 'debug' )( 'yourapp:morestuff' );
```

## Install

`npm install --save-dev webpack-remove-debug`

## Configuration
In your Webpack 1 config:

```javascript
{
    module: {
        loaders: [
            {
				test: /\.js$/,
				loader: 'webpack-remove-debug'
			}
        ]
    }
};
```

In your Webpack 2 config:

```javascript
{
    module: {
        rules: [
            {
				test: /\.js$/,
				loader: 'webpack-remove-debug'
			}
        ]
    }
};
```
