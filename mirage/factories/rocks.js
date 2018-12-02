import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  rock(i){
    return `<Rock-${i+1}>`;
  },
  eye(i){
    return `<Eye-Ball-${i+1}>`;
  },
  pupil(i){
    return `<Pupil-${i+1}>`;
  },
  pColor(i){
    return "pColor";
  },
  rColor(i){
    return "rColor";
  }
});
