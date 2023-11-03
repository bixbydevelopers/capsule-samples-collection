import config from 'config'
import secret from 'secret'
import console from 'console'

/**
 * Gets and logs the config and secret
 * 
 * Simulator: Gets the config and secret from DevConsole
 * Story: Overwrites the values of the DevConsole with the mocked values if the keys are the same
 */
export default function () {
  console.log('config: ', config.get('config1'))
  console.log('secret: ',secret.get('secret1'))
  return {
    config: config.get('config1'),
    secret: secret.get('secret1'),
  }
}