const morgan = require('morgan')

morgan.format('myFormat', '[:method] [HTTP/:http-version] [:url] [:status] - [:response-time ms]')

module.exports = morgan