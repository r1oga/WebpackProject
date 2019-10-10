const express = require('express')
const path = require('path')

const app = express()

// LOGIC to be added here above
// server routes
// app.get('/blabla', (req, res) => res.send({ hi: 'there' }))

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.js')
  app.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  // make available static ressources
  app.use(express.static('dist'))
  // if get request to any route, send back index.html
  // necessary for compatibility between react router with browser history module
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
}

// deployment services may not allow to define own PORT
app.listen(process.env.PORT || 3050, () => console.log('Listening on port 3050'))
