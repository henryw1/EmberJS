import Ember from 'ember';
let {getOwner} = Ember;


export default Ember.Component.extend({
  session: Ember.inject.service("session"),
  actions:{
    logout(){
      var session = this.get("session");
      session.set('isAuthenticated', false);
      session.set('user', null);
      var controller = getOwner(this).lookup("controller:application");
      controller.transitionToRoute('index');
    }
  }
});
