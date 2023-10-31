import { Serializer as CitySerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxa-city';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CitySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
