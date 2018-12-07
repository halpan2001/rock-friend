import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    editRock(rock) {
      rock.save().then(() => {
        this.transitionToRoute('edit');
      });
    },
    deleteRock(rock){
      let confirmed = window.confirm(
        `Are you sure you want to delete ${rock.name}?`
      );

      if (confirmed) {
        rock.destroyRecord().then(()=> {
          this.transitionToRoute('index');
        });
      }
    }
  }
});
