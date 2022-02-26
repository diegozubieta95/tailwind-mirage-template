import Model, { attr } from '@ember-data/model';

export default class ClientModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') companyName;
  @attr('string') gender;
  @attr('string') randomWords;
  @attr('date') createdAt;
}
