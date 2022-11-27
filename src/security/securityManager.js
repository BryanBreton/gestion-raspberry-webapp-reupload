import { SecurityManager } from '@u-iris/iris-front-private'

const hostPath = window.location.protocol + '//' + window.location.host

export const securityManager = new SecurityManager(
  process.env.VUE_APP_AUTHORIZATION_SERVER_URI,
  process.env.VUE_APP_AUTHORIZATION_SERVER_CLIENT_ID,
  hostPath + '/security/callback.html',
  hostPath + '/security/silent-callback.html',
  hostPath
)
