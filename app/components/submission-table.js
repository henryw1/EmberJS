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
        console.log(submission.code)
        debugger;
        var session = this.get("session");
     session.set('review',true);
     session.set('code', submission.code);
     session.set('title', submission.title);
        var controller = getOwner(this).lookup("controller:application");
      controller.transitionToRoute('submit');
    }
  }




  // var localdata = this.get("localdata");
  // var content = localdata.retrieve("content");

});
