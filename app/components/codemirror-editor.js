import Ember from 'ember';
export default Ember.Component.extend({
localdata: Ember.inject.service("localdata"),
session: Ember.inject.service("session"),

didInsertElement(){
  this._super(...arguments);
  var myeditor = this.$(".myEditor");
  var editor = CodeMirror.fromTextArea(myeditor[0], {
    lineNumbers: true,
    mode: {name: "javascript", json: true},
  });
  this.set("editor", editor);
      var session = this.get("session");
    if (session.review){
    this.set("title", session.title);
    editor.setValue(session.code);
  }
  },


  actions:{

          submit(){


                  var users = this.get("localdata").retrieve("users");
                  var email = this.get("session.user.email");
                  var user = users.findBy('email', email);
                  var date =  new Date();
                  var title = this.get("title");
                  var localdata = this.get("localdata");
                 var editor = this.get("editor");
                 var code = editor.doc.getValue();
                var submission = {'code':code, 'date': date, 'title': title};
                if(user.submissions){
                  }else{
                      user.submissions = [];
                }
                if (session.review){
                  user.submissions.replace(submission)
                }else{
                user.submissions.addObject(submission);
              }
                  //localdata.update("users", users);
                },
          clear(){
            var session = this.get("session");
            this.set('title', "");
             var editor = this.get("editor");
            editor.setValue(" ");
            session.set('review', false);
                }

}

});
