import DS from 'ember-data';

export default DS.Model.extend({
  rock: DS.attr('string'),
  eye: DS.attr('string'),
  pupil: DS.attr('string'),
  pColor:DS.attr('string'),
  rColor: DS.attr('string'),
});
