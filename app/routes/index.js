const { USER } = require('../auth/scopes')
const { GET } = require('../constants/http-verbs')

module.exports = {
  method: GET,
  path: '/',
  options: { auth: { strategy: 'jwt', scope: [USER] } },
  handler: (request, h) => {
    return h.view('index')
  }
}
