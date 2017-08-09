//router.js file is created by the Ember CLI
import Ember from 'ember'; //Access to Ember.js library as the variable Ember
import config from './config/environment'; // Access to our app's configuration data as the word config

const Router = Ember.Router.extend({ //defines a constant Router whose value cant be changed
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
});

export default Router; //makes router constant available to other parts of app
