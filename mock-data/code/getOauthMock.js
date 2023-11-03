import console from 'console'

/**
 * Returns the access token from the authentication
 * 
 * Simulator: Asks user to authenticate
 * Story: Skips authentication and uses the mocked token
 */
export default function ({$vivContext}) {
  console.log('Skipped authentication, using the mocked token: ', $vivContext.accessToken)
  return $vivContext.accessToken
}