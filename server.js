'use strict'

require('dotenv').config();

const express      = require('express');
const auth         = require('http-auth');
const path         = require('path');
const fs           = require('fs');
const app          = express();
const models       = require('./models')({phantomScriptsPath : path.join(__dirname, 'phantom')});

app.set('port', (process.env.PORT || 3000));

if(typeof(process.env.USERNAME) === 'string' && typeof(process.env.PASSWORD) === 'string') {
  app.use(auth.connect(auth.basic({
    realm: 'AUTHENTICATION REQUIRED'
  }, (username, password, cb) => {
    cb(username === process.env.USERNAME && password === process.env.PASSWORD);
  })));
}

app.get('/', (req, res) => {

  const url     = req.query.url || 'http://stackoverflow.com';
  const width   = req.query.w   || 1024;
  const height  = req.query.h   || 768;
  const outFile = models.phantom.slugify(url) + '-' + Math.floor(Date.now() / 1000) + '.pdf';

  models.phantom.convert(url, width, height, (tmpPath) => {    
    fs.readFile(tmpPath, (err, data) => {
      if (err) throw err;
      res.set('Content-Disposition', 'attachment;filename=' + outFile);
      res.set('Content-Type', 'application/octet-stream');
      res.send(data);
    });
  });
});

// lets startup this puppy
app.listen(app.get('port'), () => {
  console.log(`Server listening on port: ${app.get('port')}`);
});
