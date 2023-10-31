import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  влажность: DS.attr('decimal'),
  долгота: DS.attr('decimal'),
  местоположение: DS.attr('string'),
  название: DS.attr('string'),
  текущаяТемп: DS.attr('decimal'),
  широта: DS.attr('decimal'),
  city: DS.belongsTo('i-i-s-muxa-city', { inverse: null, async: false })
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  влажность: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.влажность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  местоположение: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.местоположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  текущаяТемп: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.текущаяТемп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-muxa-meteo.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeteoE', 'i-i-s-muxa-meteo', {
    широта: attr('Широта', { index: 0 }),
    название: attr('Название', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    iDИдентификатор: attr('I d идентификатор', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    текущаяТемп: attr('Текущая темп', { index: 5 }),
    влажность: attr('Влажность', { index: 6 }),
    city: belongsTo('i-i-s-muxa-city', 'City', {
      название: attr('Название', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('MeteoL', 'i-i-s-muxa-meteo', {
    широта: attr('Широта', { index: 0 }),
    название: attr('Название', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    iDИдентификатор: attr('I d идентификатор', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    текущаяТемп: attr('Текущая темп', { index: 5 }),
    влажность: attr('Влажность', { index: 6 }),
    city: belongsTo('i-i-s-muxa-city', 'Название', {
      название: attr('Название', { index: 7 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('МетеостанцияE', 'i-i-s-muxa-meteo', {
    название: attr('Название', { index: 0 }),
    iDИдентификатор: attr('I d идентификатор', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    влажность: attr('Влажность', { index: 5 })
  });

  modelClass.defineProjection('МетеостанцияL', 'i-i-s-muxa-meteo', {
    название: attr('Название', { index: 0 }),
    iDИдентификатор: attr('I d идентификатор', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    влажность: attr('Влажность', { index: 5 })
  });
};
