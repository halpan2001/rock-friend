import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pColor:DS.attr('string'),
  rColor: DS.attr('string'),
  bColor: DS.attr('string')
});
