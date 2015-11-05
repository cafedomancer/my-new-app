import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      posts: this.store.findAll('post'),
    });
  }
});
