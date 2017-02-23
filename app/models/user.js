import DS from 'localdata';
import model from 'code-review/models/users'

export default DS.Model.extend({
   name: DS.attr('string'),
   email: DS.attr('string'),
  password: DS.attr('string'),
  content: DS.hasMany('content')
});
