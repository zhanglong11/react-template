const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware');
const webpack = require('webpack');
const config = require('../configs/webpack.config.dev');

const app = express();
const compiler = webpack(config);
const DEV_SERVER_PORT = 8083;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(proxy('/main', {
    target: 'http://172.16.10.19:10000',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        "^/main": "/"
    },
}));
app.use(proxy('/core', {
    target: 'http://172.16.10.19:10011',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        "^/core": "/"
    },
}));

app.listen(DEV_SERVER_PORT, () => {
    console.log(`Server is listening at port ${DEV_SERVER_PORT}`);
});
