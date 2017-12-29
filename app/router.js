import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('rentals', function () {
    this.route('show', {
      path: ':rental_id'
    }, function () {
      this.route('bookings', { resetNamespace: true }, function () {
        this.route('new');
      });
    });



    this.route('edit', { path: '/:rental_id/edit' });
  });

    // this.route('bookings', function () {
    //   this.route('new', function () {
    //     this.route('rentals', { resetNamespace: true }, function () {
    //       this.route('show', { path: ':rental_id' });
    //     });
    //   })
    // })

});

export default Router;



