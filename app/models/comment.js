import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  author: DS.attr(),
  created: DS.attr(),
  post: DS.belongsTo('post')
})