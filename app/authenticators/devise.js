import Devise from 'ember-simple-auth/authenticators/devise';
import config from 'ember-get-config';

// const JSON_CONTENT_TYPE = 'application/json';

/*
  Here we define our authenticator method from one of the following: (ember-simple-auth library)
  1 - OAuth2PasswordGrantAuthenticator: an OAuth 2.0 authenticator that implements the "Resource Owner Password Credentials Grant Type"
  2 -OAuth2ImplicitGrantAuthenticator: an OAuth 2.0 authenticator that implements the "Implicit Grant Type"
  3 - DeviseAuthenticator: an authenticator compatible with the popular Ruby on Rails authentication plugin devise
  4 - ToriiAuthenticator: an authenticator that wraps the torii library
*/

export default class DeviseAuthenticator extends Devise {
  serverTokenEndpoint = `${config.HOST}/api/sign_in`;
  serverRevokeEndpoint = `${config.HOST}/sign_out`;
}
