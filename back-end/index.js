const express = require('express');

express()
  .use(express.static('front-end'))
  .get(
    '/',
    (req, res, next) => console.info('middleware2') || next(),
    (req, res) => res.send('hi, you')
  )
  .get('/api', (req, res) => {
    console.info(req.query.value);
    res.json({hi: req.query.value});
  })
  .listen(3000, () => console.log('listenin on 3000'));
