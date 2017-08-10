import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  topic: DS.attr(),
  heading: DS.attr(),
  content: DS.attr(),
  starter: DS.attr(),
  date: DS.attr(),
  rate: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
