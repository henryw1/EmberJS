import Ember from 'ember';


export default Ember.Route.extend({
  session: Ember.inject.service("session"),
  localdata: Ember.inject.service("localdata"),
actions:{
  authenticate(){
    var users = this.get("localdata").retrieve("users");
    var session = this.get("session");
    var email = this.controller.get("email");
    var password = this.controller.get("password");
    var user =users.findBy('email', email);
    if (user && user.password === password)
    {

      session.set('isAuthenticated', true);
      session.set('user', user);
      this.transitionTo('submit');
            this.controller.set("haserror", "");
    }else{
      this.controller.set("haserror", "has-error");
        }


  }
}



});
