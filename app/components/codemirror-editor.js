import Ember from 'ember';
var inject =  Ember.inject;
export default Ember.Component.extend({
classNames: ['myEditor'],

var cdd = CodeMirror(ocument.body, {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript"
});

});
