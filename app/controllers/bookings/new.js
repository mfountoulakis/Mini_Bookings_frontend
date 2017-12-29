import moment from "moment";

export default Ember.Controller.extend({

    isDanger: false,

    startObserver: function () {
        console.log("THIS.RANGE.START ", this.range.start)
        var self = this;
        var start_date = moment(this.range.start).format('YYYY-MM-DD')
        this.get('model').set('end', start_date)
        if (start_date >= moment().format('YYYY-MM-DD')) {
            this.get('model').set('start', start_date)
        } else {
            alert('date must be in the future')
            this.set('range.start', null)
        }
    }.observes('range.start'),

    endObserver: function () {
        var self = this;
        if (this.range.end) {
            const end_date = moment(this.range.end).format('YYYY-MM-DD')
            this.get('model').set('end', end_date)
        }
    }.observes('range.end'),

    actions: {
        save: function () {
            const flashMessages = Ember.get(this, 'flashMessages');

            this.get('model').save().then((model) => {
                flashMessages.success('Thank you, your booking was successfully saved!');
                this.transitionToRoute('application')
            }, (error) => {
                this.set('isDanger', true);
                flashMessages.add({
                    message: 'there was an error',
                    content: 'error message'
                });
            });
        },
        rangeChange: function (start, end) {
            console.log(start, end)
        },

        transitionOut() {
            this.transitionToRoute('application');
        }

    }
});