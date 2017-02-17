import Ember from 'ember';
import users from 'code-review/models/users';

export default Ember.Controller.extend({
  Auth: false,

  actions:{
  register: function(){
    //this.set('registering', true);
    var email = this.get('email)');
    var password= this.get('password');
    alert(password);


    // var checkuser = this.store.createRecord('user', {
    //   email: email,
    //   password: password,
    // });


  },
  authenticate: function(){
    var email = this.get('email)');
    var password= this.get('password');
  var user= users.findBy('email', email);
  if(user){
    if (user.password === password){
      this.set(Auth, true);

    }
  }


  }
  }
});
