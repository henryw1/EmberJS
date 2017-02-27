import Ember from 'ember';
 let {getOwner} = Ember;
// localdata: Ember.inject.service("localdata");
export default Ember.Component.extend({
localdata: Ember.inject.service("localdata"),
session: Ember.inject.service("session"),
    actions: {
    newcode(){
      var controller = getOwner(this).lookup("controller:application");
      controller.transitionToRoute('submit');

    },

      edit(submission){
        debugger;
        var session = this.get("session");
     session.set('review',true);
     session.set('submission', submission);   //submission passed from the function parameter edit(submission)
    var controller = getOwner(this).lookup("controller:application");
      controller.transitionToRoute('submit');
    },
    dlt(submission){
      debugger;
      var session = this.get("session");
   session.set('review',true);
   var localdata = this.get("localdata");
   var users = this.get("localdata").retrieve("users");
   var email = this.get("session.user.email");
   var user = users.findBy('email', email);
   session.set('submission', submission);
   var olddate = this.get("session.submission.date");
   var oldsubmission= user.submissions.findBy('date', olddate);
   user.submissions.removeObject(oldsubmission);
   localdata.update('users',users);

     //submission passed from the function parameter edit(submission)

  // var controller = getOwner(this).lookup("controller:application");
  //   controller.transitionToRoute('submit');
    }
  }




  // var localdata = this.get("localdata");
  // var content = localdata.retrieve("content");

});
