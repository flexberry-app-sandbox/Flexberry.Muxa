import { Serializer as MeteoSerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxa-meteo';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeteoSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
