import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Bruce Wayne",
  city: "Gotham City",
  type: "Cave",
  bedrooms: 1,
  image: "http://vignette1.wikia.nocookie.net/injusticefanon/images/1/17/Batcave_(DoI).jpg/revision/latest?cb=20150318035818"
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
