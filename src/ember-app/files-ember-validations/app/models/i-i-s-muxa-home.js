import {
  defineNamespace,
  defineProjections,
  Model as HomeMixin
} from '../mixins/regenerated/models/i-i-s-muxa-home';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(HomeMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
