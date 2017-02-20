import Ember from 'ember';
var inject =  Ember.inject;
export default Ember.Component.extend({
didInsertElement(){
  this._super(...arguments);
  var myeditor = this.$(".myEditor");
  var editor = CodeMirror.fromTextArea(myeditor[0], {
    lineNumbers: true,
    language:'javascript'
  });


}
});
