import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() { return faker.name.fisrtName(); }
});