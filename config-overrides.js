const { override, addWebpackPlugin } = require('customize-cra');

// Reference for workbox-webpack-plugin
// https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/

const { InjectManifest } = require('workbox-webpack-plugin');
module.exports = (webpack, ...args) => {
    webpack.plugins.pop();
    const overridenConf = override(
        addWebpackPlugin(
            new InjectManifest({
                swSrc: './src/custom-serviceWorker.js',
                swDest: './service-worker.js',
            }),
        ))(webpack, ...args);
    return overridenConf;
};