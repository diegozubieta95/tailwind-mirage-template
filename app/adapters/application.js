import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import config from 'ember-get-config';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = config.HOST;
  namespace = config.API_NAMESPACE;

  @computed(
    'session.isAuthenticated',
    'session.data.authenticated.{email,token}',
    'currentClient.client.id',
    function () {
      let headers = {
        'Content-Type': 'application/vnd.api+json',
      };
      if (this.session.isAuthenticated) {
        headers['X-User-Email'] = this.session.data.authenticated.email;
        headers['X-User-Token'] = this.session.data.authenticated.token;
      }
      return headers;
    }
  )
  headers;
}
