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
            // localStorage.clear();
            var users = this.get("localdata").retrieve("users");
            var email = this.get("session.user.email");
            var user = users.findBy('email', email);
            var title = this.get("title");
            var localdata = this.get("localdata");
            var date =  new Date();
            debugger;
            var editor = this.get("editor");
            var code = editor.doc.getValue();
              var session = this.get("session");

                  if (session.review){
                      debugger;
                      // var oldtitle = this.get("session.submission.title")
                      var olddate = this.get("session.submission.date");
                      var oldsubmission= user.submissions.findBy('date', olddate);
                      user.submissions.removeObject(oldsubmission);
                     var submission = {'code':code, 'date': date, 'title': title};
                     user.submissions.addObject(submission);
                     localdata.update("users", users);
                     

              }else {

                      var submission = {'code':code, 'date': date, 'title': title};
                      if(user.submissions){
                        }else{
                            user.submissions = [];
                              }
                      user.submissions.addObject(submission);
                      localdata.update("users", users);
                    }


                      }
              },
          clear(){
            var session = this.get("session");
            this.set('title', "");
             var editor = this.get("editor");
            editor.setValue(" ");
            session.set('review', false);
                }




});
