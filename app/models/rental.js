import DS from 'ember-data';
import Ember from 'ember';
import faker from 'faker';

var Rental = DS.Model.extend({
  name: DS.attr('string'),
  daily_rate: DS.attr('number'),
  formatted_date: DS.attr('string'),
  bookings: DS.hasMany('booking', { async: true }),
  image: DS.attr('string', {
    defaultValue() { return  faker.random.image() }
  }),
  created_at: DS.attr('date')
});

export default Rental;


