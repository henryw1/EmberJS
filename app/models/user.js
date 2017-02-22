import DS from 'ember-data';
import model from 'code-review/models/users'

export default DS.Model.extend({
   name: DS.attr('string'),
   email: DS.attr('string'),
  password: DS.attr('string')
});
