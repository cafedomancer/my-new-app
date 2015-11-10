import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    add() {
      this.store.createRecord('author', {
        firstName: 'Ganon',
        etCetera: { lastName: 'Dragmire' }
      }).save();
    },

    clear() {
      this.store.unloadAll();
      this.refresh();
    }
  },

  model() {
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      posts: this.store.findAll('post'),
    });
  }
});
