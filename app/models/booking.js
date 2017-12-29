import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

var Booking = DS.Model.extend({
  start: DS.attr('string'),
  end: DS.attr('string'),
  clientEmail: DS.attr('string'),
  rate: Ember.computed('start', 'end', function () {
    let start = this.get('start')
    let end = this.get('end')
    const range = moment.range(start, end);
    let total_cost = (range.diff('days') + 1) * this.get('rental.daily_rate')
    this.set('price', total_cost)
    return total_cost
  }),
  price: DS.attr('string'),
  rental: DS.belongsTo('rental', { async: true })
});


export default Booking;


