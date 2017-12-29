export default Ember.Controller.extend({
    actions: {
        saveBooking(model) {
            console.log('+--- save action called in friends new controller');
            
            this.save(this.get('model'));
        }

    }
});