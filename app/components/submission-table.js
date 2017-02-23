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
    edit(){
      var session = this.get("session");
     session.set('review', true);
      var controller = getOwner(this).lookup("controller:application");
      controller.transitionToRoute('submit');
    }
  }


  

  // var localdata = this.get("localdata");
  // var content = localdata.retrieve("content");

});
