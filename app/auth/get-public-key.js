const Wreck = require('@hapi/wreck')
const { serverConfig } = require('../config')

const getPublicKey = async () => {
  const { payload } = await Wreck.get(`${serverConfig.authHost}/auth/public-key`, { json: true })
  console.log('public key payload', payload)
  return payload
}

module.exports = {
  getPublicKey
}
