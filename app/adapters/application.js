import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: config.API_HOST
});

