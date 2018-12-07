import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  id(i){
    return i+1;
  },
  name(){
    return faker.name.prefix() + " " + faker.name.firstName() + " " + faker.name.lastName();
  },
  pColor(){
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  },
  rColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  },
  bColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
});
