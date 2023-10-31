import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMuxaCityLForm from './forms/i-i-s-muxa-city-l';
import IISMuxaHomeLForm from './forms/i-i-s-muxa-home-l';
import IISMuxaMeteoLForm from './forms/i-i-s-muxa-meteo-l';
import IISMuxaCityEForm from './forms/i-i-s-muxa-city-e';
import IISMuxaHomeEForm from './forms/i-i-s-muxa-home-e';
import IISMuxaMeteoEForm from './forms/i-i-s-muxa-meteo-e';
import IISMuxaCityModel from './models/i-i-s-muxa-city';
import IISMuxaHomeModel from './models/i-i-s-muxa-home';
import IISMuxaMeteoModel from './models/i-i-s-muxa-meteo';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-muxa-city': IISMuxaCityModel,
    'i-i-s-muxa-home': IISMuxaHomeModel,
    'i-i-s-muxa-meteo': IISMuxaMeteoModel
  },

  'application-name': 'Muxa',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Muxa',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Muxa',
          title: 'Muxa'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        muxa: {
          caption: 'Muxa',
          title: 'Muxa',
          'i-i-s-muxa-meteo-l': {
            caption: 'Meteo',
            title: ''
          },
          'i-i-s-muxa-city-l': {
            caption: 'City',
            title: ''
          },
          'i-i-s-muxa-home-l': {
            caption: 'Home',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-muxa-city-l': IISMuxaCityLForm,
    'i-i-s-muxa-home-l': IISMuxaHomeLForm,
    'i-i-s-muxa-meteo-l': IISMuxaMeteoLForm,
    'i-i-s-muxa-city-e': IISMuxaCityEForm,
    'i-i-s-muxa-home-e': IISMuxaHomeEForm,
    'i-i-s-muxa-meteo-e': IISMuxaMeteoEForm
  },

});

export default translations;
