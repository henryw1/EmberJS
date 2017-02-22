import Ember from 'ember';
let {getOwner} = Ember;
//let {getOwner} = Ember;
export default Ember.Component.extend({

didInsertElement(){
  this._super(...arguments);
  var myeditor = this.$(".myEditor");
  var editor = CodeMirror.fromTextArea(myeditor[0], {
    lineNumbers: true,
    mode:"javascript"
  });
},

  actions:{
  submit(){
    var code = this.controller.getElementById('editor');
    console.log(code);


    // var controller =  getOwner(this).lookup("controller:application");
    // controller.transitionToRoute('review');
    //debugger;
  }
}



});
