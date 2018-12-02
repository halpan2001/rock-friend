import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.name.prefix() + " " + faker.name.firstName() + " " + faker.name.lastName();
  },
  rock(i){
    return `<Rock-${getRandomInt(7)}>`;
  },
  eye(i){
    return `<Eye-Ball-${getRandomInt(5)}>`;
  },
  pupil(i){
    return `<Pupil-${getRandomInt(7)}>`;
  },
  pColor(i){
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  },
  rColor(i){
    return '#'+Math.floor(Math.random()*16777215).toString(16);;
  },
  bColor(i){
    return '#'+Math.floor(Math.random()*16777215).toString(16);;
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
