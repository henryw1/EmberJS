import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  // this.route('nonapp', function () {
  //
  // });
  this.route('submit', function() {
    this.route('review');
  });
  this.route('review');
});
export default Router;
