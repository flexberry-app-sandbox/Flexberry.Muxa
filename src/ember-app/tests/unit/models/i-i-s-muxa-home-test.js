import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-muxa-home', 'Unit | Model | i-i-s-muxa-home', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-muxa-city',
    'model:i-i-s-muxa-home',
    'model:i-i-s-muxa-meteo',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
