import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveNew(inRock){
      let rock = this.store.createRecord('rock', {
        name: inRock.name,
        pColor: inRock.pColor,
        rColor: inRock.rColor,
        bColor: inRock.bColor
      });

      rock.save().then(() => {
        // this.transitionToRoute('index');
        this.transitionToRoute('edit', 2);
      });

    }
  }
});
