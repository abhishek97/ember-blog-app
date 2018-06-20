import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://4acd7b11.ngrok.io',
  namespace: 'api'
});
