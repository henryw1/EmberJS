import Ember from 'ember';
export default Ember.Component.extend({
  localdata: Ember.inject.service("localdata"),

didInsertElement(){
  this._super(...arguments);
  var myeditor = this.$(".myEditor");
  var editor = CodeMirror.fromTextArea(myeditor[0], {
    lineNumbers: true,
    mode: {name: "javascript", json: true},
  });
  this.set("editor", editor);

},
  actions:{
  submit(){
    var date =  new Date();
    var localdata = this.get("localdata");
    var content = localdata.retrieve("content");
    var editor = this.get("editor");
  var code =  editor.doc.getValue();
  var value = {'code':code, 'date': date};
  content.addObject(value, date);
localdata.update("content", content);


// var x = this.getElementById('snackbar');
// x.className = "show";
//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }
}

});
