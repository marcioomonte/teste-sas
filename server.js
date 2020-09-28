const express = require('express');
const compression = require('compression');
const path = require('path');
const cors = require('cors');

const app = express();
// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

const build_folder = process.env.BUILD_FOLDER || 'build_production';

dotenv.config();

app.use(compression());
app.use(express.static(path.join(__dirname, build_folder)));
app.use(cors());

app.use(
  '/api/ear',
  createProxyMiddleware({
    target: process.env.API_URL_EAR || 'http://localhost:8000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/ear': '' // remove base path
    }
  })
);

app.use(
  '/api/ead',
  createProxyMiddleware({
    target: process.env.API_URL_EAD || 'http://localhost:8001',
    changeOrigin: true,
    pathRewrite: {
      '^/api/ead': '' // remove base path
    }
  })
);

// const wsProxy = createProxyMiddleware('/ws', {
//     target: process.env.WEBSOCKET_URL,
//     changeOrigin: true,
//     secure: true,
//     ws: true,
//     // logLevel: 'debug',
// })

// app.use(wsProxy);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, build_folder, 'index.html'));
});

app.listen(process.env.PORT || 3000);
// app.on('upgrade', wsProxy.upgrade);
