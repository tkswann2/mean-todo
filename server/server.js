'use strict'

const express = require('express')
  ,       app = express()
  ,      PORT = process.env.PORT || 3000

app.set('port', PORT)

app.use(express.static('client'))

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
