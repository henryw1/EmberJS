import Ember from 'ember';

export default Ember.Service.extend({
  isAuthenticated: false,
  user:null,
  userExists:false,
  review:false,
  code:null,
  date:null,
});
