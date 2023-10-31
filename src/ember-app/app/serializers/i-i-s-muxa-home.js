import { Serializer as HomeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-muxa-home';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HomeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
