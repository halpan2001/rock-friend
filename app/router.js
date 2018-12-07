import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create', {path: '/create'});
  this.route('share', {path: '/share'});
  this.route('about', {path: '/about'});
  this.route('edit', {path: '/edit/:id'});
});

export default Router;
