import Component from '@ember/component';

export default Component.extend({
  actions:{
    randomRock(rock, event){
      console.log("random ROCK!");

      let rColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      let bColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      let pColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

      rock.set('rColor', rColor);
      rock.set('bColor', bColor);
      rock.set('pColor', pColor);

      console.log(rock);
      event.preventDefault();
      // first create new random color data and name
      //edit the first entry
    }
  }
});
