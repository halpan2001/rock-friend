import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveNew(inRock){
      console.log("LOGGING");

      let rock = this.store.createRecord('rock', {
        name: inRock.name,
        pColor: inRock.pColor,
        rColor: inRock.rColor,
        bColor: inRock.bColor
      });

      console.log(rock);

      rock.save().then(() => {
        // this.transitionToRoute('index');
        this.transitionToRoute('edit');
      });

    }
  }
});
