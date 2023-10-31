import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-muxa-city-l');
  this.route('i-i-s-muxa-city-e',
  { path: 'i-i-s-muxa-city-e/:id' });
  this.route('i-i-s-muxa-city-e.new',
  { path: 'i-i-s-muxa-city-e/new' });
  this.route('i-i-s-muxa-home-l');
  this.route('i-i-s-muxa-home-e',
  { path: 'i-i-s-muxa-home-e/:id' });
  this.route('i-i-s-muxa-home-e.new',
  { path: 'i-i-s-muxa-home-e/new' });
  this.route('i-i-s-muxa-meteo-l');
  this.route('i-i-s-muxa-meteo-e',
  { path: 'i-i-s-muxa-meteo-e/:id' });
  this.route('i-i-s-muxa-meteo-e.new',
  { path: 'i-i-s-muxa-meteo-e/new' });
});

export default Router;
