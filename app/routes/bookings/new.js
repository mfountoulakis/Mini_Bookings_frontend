import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('booking', {
            rental: this.modelFor('rentals.show')
        });
    },
    setupController: function (controller, model) {
        controller.set('model', model);
        controller.set('range', "")
    },
    afterModel(model) {
        var self = this
        self.get('store').query('booking', {
            rental_id: self.modelFor('rentals.show').get('id')
        }).then(function (booking) {
            // console.log(booking.get('length'))
            var disabledDates = [];

            if (booking.get('length')) {
                booking.forEach(booking => {

                    const start = booking.get('start')
                    const end = moment(booking.get('end'))

                    var now = moment(start)

                    while (now.isSameOrBefore(end)) {
                        now.add(1, 'days');
                        disabledDates.push(now.format('M/D/YYYY'));
                    }
                    self.controller.set('disabledDates', disabledDates)
                });
            } else {
                self.controller.set('disabledDates', null)
            }
        })
    }
});

