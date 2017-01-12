import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
     this.set('isImageShowing', false);
   },
   model(params) {
     return this.store.findRecord('rental', params.rental_id);
   },
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
