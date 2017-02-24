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
    this.set("title", session.submission.title);
    editor.setValue(session.submission.code);

  }
  },


  actions:{

          submit(){
            var users = this.get("localdata").retrieve("users");
            var email = this.get("session.user.email");
            var user = users.findBy('email', email);
              var session = this.get("session");
            if (session.review){
              debugger;

              var oldsubmission = session.get("submission");
              var date =  new Date();
              var title = this.get("title");
              var localdata = this.get("localdata");
             var editor = this.get("editor");
             var code = editor.doc.getValue();
            var submission = {'code':code, 'date': date, 'title': title};
              user.submissions.replace('oldsubmission', submission);

            }else {
                  // var users = this.get("localdata").retrieve("users");
                  // var email = this.get("session.user.email");
                  // var user = users.findBy('email', email);
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
