import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),

  posts: DS.hasMany()
});
