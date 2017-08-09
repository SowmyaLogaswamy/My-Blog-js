import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    saveBlog1() {
      var params = {
        topic: this.get('topic'),
        image: this.get('image'),
        content: this.get('content'),
        starter: this.get('starter'),
        rate: this.get('rate'),
        date: this.get('date')
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params);
    }
  }
});
