import Ember from 'ember';
var blogs = [{
  id: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzjjlQWgBWCK8V_Hc9hk-rSHuar6GHamqKcYn7E6x7gY2DxUMzA",
  topic: "Painting",
  content: "I have an idea that the only thing which makes it possible to regard this world we live in without disgust is the beauty which now and then men create out of the chaos. The pictures they paint, the music they compose, the books they write, and the lives they lead. Of all these the richest in beauty is the beautiful life. That is the perfect work of art.” Writing, painting, singing- it cannot stop everything. Cannot halt death in its tracks. But perhaps it can make the pause between death’s footsteps sound and look and feel beautiful, can make the space of waiting a place where you can linger without as much fear. For we are all walking each other to our deaths, and the journey there between footsteps makes up our lives.",
  starter: "I have an idea that the only thing which makes it possible to regard this world we live in without disgust is the beauty which...",
  date: "Aug 9,2017",
  rate: "20$"
}, {
  id: 2,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy8pJy7XQpewWppWbqPk9dl1pviWST8Kh0BX4RbRdR8inhn-_mg",
  topic: "Painting",
  content: "I have an idea that the only thing which makes it possible to regard this world we live in without disgust is the beauty which now and then men create out of the chaos. The pictures they paint, the music they compose, the books they write, and the lives they lead. Of all these the richest in beauty is the beautiful life. That is the perfect work of art.” Writing, painting, singing- it cannot stop everything. Cannot halt death in its tracks. But perhaps it can make the pause between death’s footsteps sound and look and feel beautiful, can make the space of waiting a place where you can linger without as much fear. For we are all walking each other to our deaths, and the journey there between footsteps makes up our lives.",
  starter: "I have an idea that the only thing which makes it possible to regard this world we live in without disgust is the beauty which...",
  date: "Aug 9,2017",
  rate: "50$"
}];

export default Ember.Route.extend({
  model() {
    return blogs;
  },
});
