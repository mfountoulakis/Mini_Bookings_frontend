import DS from 'ember-data';
import config from "../config/environment";

export default DS.JSONAPIAdapter.extend({
  namespace: config.API_NAMESPACE,
  host: config.API_HOST
});

