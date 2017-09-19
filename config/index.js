// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8000,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/goods': {
                target: 'http://localhost:3000/goods',
                changeOrigin: true,
                pathRewrite: {
                    '^/goods': ''
                }
            },
            '/addCart': {
                target: 'http://localhost:3000/addCart',
                changeOrigin:true,
                pathRewrite:{
                  '^/addCart':''
                }
            },
            '/login':{
              target:'http://localhost:3000/login',
                changeOrigin:true,
                pathRewrite:{
                    '^/login':''
                }
            },
            '/logout':{
              target:'http://localhost:3000/logout',
                changeOrigin:true,
                pathRewrite:{
                  '^/logout':''
                }
            },
            '/checkLogin':{
                target:'http://localhost:3000/checkLogin',
                changeOrigin:true,
                pathRewrite:{
                    '^/checkLogin':''
                }
            },
            '/cartList':{
                target:'http://localhost:3000/cartList',
                changeOrigin:true,
                pathRewrite:{
                    '^/cartList':''
                }
            },
            '/delgoods':{
                target:'http://localhost:3000/delgoods',
                changeOrigin:true,
                pathRewrite:{
                    '^/delgoods':''
                }
            },
            '/edit':{
                target:'http://localhost:3000/edit',
                changeOrigin:true,
                pathRewrite:{
                    '^/edit':''
                }
            },
            '/selectAll':{
                target:'http://localhost:3000/selectAll',
                changeOrigin:true,
                pathRewrite:{
                    '^/selectAll':''
                }
            },
            '/getAdderss':{
                target:'http://localhost:3000/getAdderss',
                changeOrigin:true,
                pathRewrite:{
                    '^/getAdderss':''
                }
            },
            // setDefaultAddre   /deladders
            '/setDefaultAddre':{
                target:'http://localhost:3000/setDefaultAddre',
                changeOrigin:true,
                pathRewrite:{
                    '^/setDefaultAddre':''
                }
            },
            '/deladders':{
                target:'http://localhost:3000/deladders',
                changeOrigin:true,
                pathRewrite:{
                    '^/deladders':''
                }
            },
            '/getconfirm':{
                target:'http://localhost:3000/getConFirm',
                changeOrigin:true,
                pathRewrite:{
                    '^/getconfirm':''
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};
