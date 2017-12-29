import Ember from 'ember';

export default Ember.Component.extend({
    isActive: true,
    actions: {
        closeModal: function () {
            this.set('isActive', false)
            this.sendAction("transitionOut")
        },
        save: function (model) {
            this.sendAction("action")
        }
    }
});
