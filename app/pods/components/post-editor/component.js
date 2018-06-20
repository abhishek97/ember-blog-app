import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost () {
      this.get('onSave')()
    }
  }
});
