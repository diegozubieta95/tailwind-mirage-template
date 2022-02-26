import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;

  @tracked email;
  @tracked password;

  @task(function*(event) {
    event.preventDefault();
    try {
      yield this.session.authenticate('authenticator:devise', this.email.trim(), this.password);
    } catch(e) {
      console.log(e);
    }
  }).drop() authenticate;
}