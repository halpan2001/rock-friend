import Component from '@ember/component';
import {faker} from 'ember-cli-mirage';

export default Component.extend({
  actions:{
    randomRock(rock, event){
      console.log("random ROCK!");

      let rColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      let bColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      let pColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

      let name = faker.name.prefix() + " " + faker.name.firstName() + " " + faker.name.lastName();
      console.log(name);

      rock.set('rColor', rColor);
      rock.set('bColor', bColor);
      rock.set('pColor', pColor);
      rock.set('name', name);

      console.log(rock);
      // first create new random color data and name
      //edit the first entry
    }
  }
});
