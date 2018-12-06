import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.name.prefix() + " " + faker.name.firstName() + " " + faker.name.lastName();
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
