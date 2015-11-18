import Ember from 'ember';
import _sample from 'lodash/collection/sample';

export default Ember.Route.extend({
  actions: {
    promise() {
      let promise = new Promise((resolve, reject) => {
        // Ember sends a request.
        let request = Ember.Object.create({
          status: null
        });

        // The request is scheduled.
        Ember.run.later(() => {
          request.set('status', _sample(['successful', 'failed']));
        }, 1000);

        // Ember polls the status of the request.
        let poll = () => {
          Ember.run.later(() => {
            if (!request.get('status')) {
              poll();
            } else if (request.get('status') === 'successful') {
              // Invoke the resolve function if the request is succeeded.
              resolve();
            } else if (request.get('status') === 'failed') {
              // Invoke the resolve function if the reuqest if failed.
              reject();
            }
          }, 250);
        };

        poll();
      });

      promise.then(() => {
        console.log('promise fulfilled');
      }, () => {
        console.log('promise rejected');
      });
    },

    sequence() {
      let something = this.store.createRecord('author', {
        firstName: 'Ganon 1',
      }).save().then((author) => {
        return this.store.createRecord('author', {
          firstName: author.get('firstName').replace('1', '2')
        }).save();
      }).then((author) => {
        return this.store.createRecord('author', {
          firstName: author.get('firstName').replace('2', '3')
        }).save();
      });

      something.then((something) => { debugger; });
    },

    reload() {
      this.store.unloadAll();
      this.refresh();
    }
  },

  model() {
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      posts: this.store.findAll('post')
    });
  }
});
