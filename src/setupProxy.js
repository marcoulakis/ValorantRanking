const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/val/',
        createProxyMiddleware({
            target: 'https://br.api.riotgames.com',
            changeOrigin: true,
        })
        );
    
};