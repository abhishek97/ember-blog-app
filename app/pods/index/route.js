import Ember from 'ember';

export default Ember.Route.extend({
  activate () {
    console.log("Activate Hook called")
  },
  model () {
    return this.store.findAll('post')
  },
  setupController (controller, resolvedModel) {
    controller.set("posts", resolvedModel)
  }

});
