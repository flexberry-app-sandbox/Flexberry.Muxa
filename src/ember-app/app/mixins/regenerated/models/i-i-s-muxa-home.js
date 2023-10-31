import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  адрес: DS.attr('string'),
  городID: DS.attr('number'),
  долгота: DS.attr('decimal'),
  название: DS.attr('string'),
  широта: DS.attr('decimal'),
  city: DS.belongsTo('i-i-s-muxa-city', { inverse: null, async: false })
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  городID: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.городID.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-muxa-home.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('HomeE', 'i-i-s-muxa-home', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 }),
    city: belongsTo('i-i-s-muxa-city', 'City', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('HomeL', 'i-i-s-muxa-home', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 }),
    city: belongsTo('i-i-s-muxa-city', 'Название', {
      название: attr('Название', { index: 6 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗданиеE', 'i-i-s-muxa-home', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-muxa-home', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    долгота: attr('Долгота', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    городID: attr('Город ID', { index: 4 }),
    iDИдентификатор: attr('I d идентификатор', { index: 5 })
  });
};
