import Ember from 'ember';
import users from 'code-review/models/users';

export default Ember.Route.extend({
  session: Ember.inject.service("session"),
actions:{
  authenticate(){
    var email = this.controller.get("email");
    var password = this.controller.get("password");
    var user =users.findBy('email', email);
    if (user && user.password === password)
    {
      var session = this.get("session");
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
