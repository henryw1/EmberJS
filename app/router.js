import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('review');
  this.route('submit');

 //  this.route('login');
 // this.route('home', {path: '/#'});

  // this.route('nonapp', function () {
  //
  // });
  this.route('login', function() {
        this.route('/#', {path: 'home'});
  });
//  this.route('review');
});
export default Router;
