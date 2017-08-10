import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(rental) {
      var params = {
        image: this.get('image'),
        topic: this.get('topic'),
        heading: this.get('heading'),
        content: this.get('content'),
        date: this.get('date'),
        rate: this.get('rate')
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
