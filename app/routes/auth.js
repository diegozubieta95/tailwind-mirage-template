import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthRoute extends Route {
  @service session;
  @service store;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return this.store.findAll('user');
  }
}
