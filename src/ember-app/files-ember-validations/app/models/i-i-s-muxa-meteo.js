import {
  defineNamespace,
  defineProjections,
  Model as MeteoMixin
} from '../mixins/regenerated/models/i-i-s-muxa-meteo';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(MeteoMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
