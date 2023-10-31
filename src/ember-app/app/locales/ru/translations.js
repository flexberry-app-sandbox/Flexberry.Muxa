import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Muxa',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Muxa',
          title: 'Muxa'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
