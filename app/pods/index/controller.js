import Ember from 'ember';

export default Ember.Controller.extend({
  //selectedPost: null,
  actions: {
    selectPost (post) {
      this.set("selectedPost", post)
    },
    save () {
      this.get("selectedPost").save()
    }
  }
});
