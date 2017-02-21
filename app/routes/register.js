import Ember from 'ember';
import users from 'code-review/models/users';

export default Ember.Route.extend({
  session: Ember.inject.service("session"),

  actions: {
    register(){

      var email = this.controller.get("email");
      var name =  this.controller.get("fullname");
      var password = this.controller.get("password");

      var newuser = {'name': name, 'email': email, 'password': password};
      var user =users.findBy('email', email);
      if (user){
        var session = this.get("session");
        session.set('userExists', true);
        alert("user exists");
      }
      else{
        alert("no user");
      users.addObject(newuser);
      var session = this.get("session");
      session.set('isAuthenticated', true);
      session.set('user', user);
      this.transitionTo('submit');
    }


   }
    }

});
