import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),

    model: function (params) {
        return this.store.findAll('rental')    
    }
    
});
