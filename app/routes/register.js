import Ember from 'ember';


export default Ember.Route.extend({
  session: Ember.inject.service("session"),
localdata: Ember.inject.service("localdata"),
  actions: {
    register(){
      var localdata = this.get("localdata");
      var session = this.get("session");
      var users = localdata.retrieve("users");
      var content =  localdata.retrieve("[content]");
      var email = this.controller.get("email");
      var name =  this.controller.get("fullname");
      var password = this.controller.get("password");

      var newuser = {'name': name, 'email': email, 'password': password, 'content': content };
      var user =users.findBy('email', email);
      if (user){

        session.set('userExists', true);
        //alert("user exists");
      }
      else{
        //alert("no user");
      users.addObject(newuser);
      var session = this.get("session");
      session.set('isAuthenticated', true);
      session.set('user', user);
      localdata.update("users", users);
      this.transitionTo('submit');
    }


   }
    }

});
