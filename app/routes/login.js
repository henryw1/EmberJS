import Ember from 'ember';
import users from 'code-review/models/users';

export default Ember.Route.extend({
  Model: function (user){
    return users.findBy('email', user.email)
  }


});
