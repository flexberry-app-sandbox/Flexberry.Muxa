import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as HomeMixin
} from '../mixins/regenerated/models/i-i-s-muxa-home';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(HomeMixin, Validations, {
});

defineProjections(Model);

export default Model;
