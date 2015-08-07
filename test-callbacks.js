if (Meteor.isClient) {

    Template.body.onCreated(function () {
        Session.set('button', true);
    });

    Template.body.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('button', ! Session.get('button'));
        }
    });

    Template.body.helpers({
        'curTpt': function () {
            if (Session.get('button')) {
                return { 'template': 'helloLeft', 'data': { 'withTemplateDynamic': 'left' } };
            }
            else {
                return { 'template': 'helloRight', 'data': { 'withTemplateDynamic': 'right' } };
            }
        }
        , 'left': function () { return Session.get('button'); }
    });


    Template.helloLeft.onCreated(function () {
        var self = this;
        debugger;
    });

    Template.helloLeft.onDestroyed(function () {
        var self = this;
        debugger;
    });

}
