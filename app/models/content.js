import DS from 'localdata';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
 status: DS.attr('string'),
 user: DS.belongsTo('user')
});
